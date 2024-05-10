import { Post } from "./src/components/post.js"

const renderPostItem = item => `
    <span class="post-title" data-post-title>
            ${item.title}
    </span>
        <span class="post-body" data-post-body>
            ${item.body}
        </span>
`

const renderCommentItem = item => `
    <div class = "comments-item">
        <span class = "comment-name">
            ${item.name} (${item.email})
        </span>
        <span class = "comment-body">
            ${item.body}
        </span>
    </div>
`

const getPostItem = async (idPost) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .catch(error => alert(error.message));;
    let post = await res.json();
    return post;
}

const getCommentsItems = async (idPost) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
        .catch(error => alert(error.message));;
    let items = await res.json();
    return items;
}


const init = () => {
    const post = document.getElementById('post')
    new Post(post, {
        renderPost: renderPostItem,
        getPost: getPostItem,
        renderComments: renderCommentItem,
        getComments: getCommentsItems
    }).init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}