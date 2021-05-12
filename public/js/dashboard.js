// document.querySelector("#add-post").addEventListener('click', function(){document.location.href="/addpost"});

// const newPost = async (e) => {
//     e.preventDefault();
//     console.log("rattle your jewelry")
//     document.location.replace('/addpost')
// }




newPostButton = document.querySelector("#add-post");
newPostButton.addEventListener("click", function(){document.location.replace("/addpost")})

  
// const addNewPost = async (event) => {

//     event.preventDefault();

//     const blogTitle = document.getElementById('blog-title').value;

//     const blogContent = document.getElementById('blog-content').value;
    
//     if (blogTitle && blogContent) {
//         const response = await fetch('/newpost', {
//             method: 'POST',
//             body: JSON.stringify({ blogTitle, blogContent}),
//             headers: { 'Content-type': 'application/json' },
//         });
//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert('Failed to create a post');
//         }
//     }

// };
