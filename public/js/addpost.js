  
const addNewPost = async (event) => {

    event.preventDefault();

    const blogTitle = document.getElementById('blog-title').value;

    const blogContent = document.getElementById('blog-content').value;
    
    if (blogTitle && blogContent) {
        const response = await fetch('/newpost', {
            method: 'POST',
            body: JSON.stringify({ blogTitle, blogContent}),
            headers: { 'Content-type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a post');
        }
    }

};

// document.querySelector('#add-post').addEventListener('click', addPost);
