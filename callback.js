const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {

    // api call to get posts
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        // document.body.innerHTML = output;
        console.log("posts are ", posts);
    }, 2000);
}

function createPost(post, callback) {
    console.log("callback", callback);
    setTimeout(() => {
        posts.push(post);


        callback()
    }, 2000);
}


createPost({ title: 'Post three', body: 'This is post three' }, getPosts)