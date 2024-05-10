export class Post{
    #post = null;
    #renderPost = null;
    #getPost = null;
    #renderComments = null;
    #getComments = null;
    #postElem = null;
    #commentsElem = null;
    #postId = null;

    constructor(post, options){
        this.#post = post;
        const { renderPost, getPost, renderComments, getComments} = options
        this.#renderPost = renderPost;
        this.#getPost = getPost;
        this.#renderComments = renderComments;
        this.#getComments = getComments;
        this.#postElem = post.querySelector('[data-postInfo]');
        this.#commentsElem = post.querySelector('[data-comments-container]');
        this.#postId = this.getId();
    }

    init () {
        window.onpopstate = () => {
            const url = new URL(window.location.href);
            const id = +url.searchParams.get('id');

            if (id !== this.#postId) {
                this.setPage(id);
                this.loadItems();
            }
        }

        this.loadItems()
    }

    getId(){
        const url = new URL(window.location.href);
        const id = +url.searchParams.get('id');

        return id || 1;
    }
    
    loadItems(){
        this.loadPost();
        this.loadComments();
    }

    async loadPost () {
        try {
            let post = await this.#getPost(this.#postId);
            this.renderPost(post);

        } catch (error) {
            console.log(error);
        }
    }

    renderPost (post) {
        this.#postElem.innerHTML = this.#renderPost(post);
    }

    async loadComments() {
        try {
            let comments = await this.#getComments(this.#postId);
            this.renderComments(comments);

        } catch (error) {
            console.log(error);
        }
    }

    renderComments(comments){
        this.#commentsElem.innerHTML = comments.map(this.#renderComments).join('')
    }
}