const posts = {
    1: {
        title: "8 годовщина в Arcaea!",
        likes: 7,
        comments: []
    },
    2: {
        title: "Новый избранный исполнитель: SEVEN LIVES",
        likes: 5,
        comments: []
    },
    3: {
        title: "EGTS 2025 приближается к концу",
        likes: 10,
        comments: []
    }
};
function toggleFullText1() {
    const full1 = document.querySelector('.fulltext1');
    full1.style.display = full1.style.display === 'none' ? 'block' : 'none';
}
function toggleFullText2() {
    const full2 = document.querySelector('.fulltext2');
    full2.style.display = full2.style.display === 'none' ? 'block' : 'none';
}
function toggleFullText3() {
    const full3 = document.querySelector('.fulltext3');
    full3.style.display = full3.style.display === 'none' ? 'block' : 'none';
}
function toggleLike(postId) {
    posts[postId].likes += 1;
    document.getElementById(`likeCount${postId}`).textContent = posts[postId].likes;
    localStorage.setItem(`post_${postId}_likes`, posts[postId].likes);
}
function postComment(postId) {
    const comment = document.querySelector('textarea').value;
    if(comment) {
        posts[postId].comments.push(comment);
        document.querySelector('textarea').value = '';
        updateComments(postId);
        console.log("да")
    }
}
function updateComments(postId) {
    const container = document.getElementById('commentsContainer');
    container.innerHTML = posts[postId].comments.map(c => `
        <div class="comment" style="margin-top: 1rem; margin-bottom: 1rem;">
            <p>${c}</p>
        </div>
    `).join('');
}
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}