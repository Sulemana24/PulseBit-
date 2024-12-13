import { posts1 } from './postData.js';

  // Get the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const postIndex = urlParams.get('post');

    if (postIndex !== null && posts1[postIndex]) {
    const post = posts1[postIndex];
    document.getElementById("post-title").innerText = post.title;
    document.getElementById("post-meta").innerHTML = `Published on ${post.meta.date} | By <span>${post.meta.author}</span>`;
    document.getElementById("post-image").src = post.image;
    document.getElementById("post-image").alt = post.title;
    document.getElementById("post-details").
    textContent = post.details;
} else {
    document.body.innerHTML = "<h1>Post not found</h1>";
}

