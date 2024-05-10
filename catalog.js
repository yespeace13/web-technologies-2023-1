import { Catalog } from "./src/components/catalog.js"

const renderPostItem = item => `
    <a  
        href="post.html?id=${item.id}"
        class="post-item"
    >
        <span class="post-item__title">
            ${item.title}
        </span>

        <span class="post-item__body">
            ${item.body}
        </span>
    </a>
`

const getPostItems = async ({ limit, page }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        .catch(error => alert(error.message));
    const total = +res.headers.get('x-total-count')
    const items = await res.json()
    return { items, total }
}

const init = () => {
    const catalog = document.getElementById('catalog')

    new Catalog(catalog, {
        renderItem: renderPostItem,
        getItems: getPostItems
    }).init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
