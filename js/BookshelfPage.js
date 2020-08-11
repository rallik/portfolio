import renderNavbar from './Navbar.js';

export default function renderBookshelfPage(bookshelf, keys) {
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('bookshelf', keys)}
        ${renderBookshelf(bookshelf)}
    `;
}

function renderBookshelf(bookshelf){
    return `
    <section id="bookshelf">
        <div class="row">
            ${renderBook(bookshelf)}
        </div>
    </section>
    `
}


function renderBook (bookshelf) {
    return bookshelf.map(d=>`
        <div class="col-8">
            <img class="bookcover" src="${d.coverPhoto}">
        </div>
        <div class="booktitle col-8">
            <em>${d.bookTitle}</em> by ${d.bookAuthor}
        </div>
    `).join('');
}