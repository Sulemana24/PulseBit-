// Share Buttons Functionality

const currentURL = window.location.href;


document.querySelector('.share-btn-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
document.querySelector('.share-btn-twitter').href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=Check%20out%20this%20post!`;
document.querySelector('.share-btn-linkedin').href = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentURL)}&title=Check%20out%20this%20post!`;



