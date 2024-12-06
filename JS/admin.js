    document.addEventListener('DOMContentLoaded', function() {
      // Edit Button
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const postRow = btn.closest('tr');
            const postId = postRow.querySelector('td:nth-child(1)').textContent;
            const postTitle = postRow.querySelector('td:nth-child(2)').textContent;
            const postDate = postRow.querySelector('td:nth-child(3)').textContent;

              // Populate the edit form with current post data
            document.getElementById('editPostId').value = postId;
            document.getElementById('editTitle').value = postTitle;
            document.getElementById('editContent').value = `Content of post #${postId}`;
            
              // Show the edit modal
            document.getElementById('editModal').style.display = 'block';
            });
    });

      // Delete Button
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
    const postRow = btn.closest('tr');
    const postId = postRow.querySelector('td:nth-child(1)').textContent;

              // Confirm delete action
    const confirmDelete = confirm('Are you sure you want to delete this post?');
        if (confirmDelete) {  
        postRow.remove();
            }
        });
    });
});

  // Close the edit modal
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

  // Handle editing and saving the form (Static example)
document.getElementById('editPostForm').addEventListener('submit', function(event) {
    event.preventDefault();

      // Get updated data from the form
    const postId = document.getElementById('editPostId').value;
    const newTitle = document.getElementById('editTitle').value;
    const newContent = document.getElementById('editContent').value;

    console.log('Post updated:', { postId, newTitle, newContent });

      // Close the modal
    closeEditModal();
    });

function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            preview.src = e.target.result;  
            preview.style.display = 'block'; 
        };

        reader.readAsDataURL(file); 
    } else {
        preview.src = '';  
        preview.style.display = 'none';  
    }
}



document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        const confirmed = confirm('Are you sure you want to delete this post?');
        if (!confirmed) {
            event.preventDefault();  
        } else {
            // Proceed with the deletion logic here (e.g., call an API or remove the post from the DOM)
            console.log('Post deleted');
        }
    });
});
