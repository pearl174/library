const theLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title}, ${author}, ${pages}, ${read}`;
    }
}


function addBookToLibrary(title, author, pages, read) {
    book = new Book(title, author, pages, read);
    theLibrary.push(book);
}

function display() {
    const parent = document.querySelector(".library-container")
    for (let i = 0; i < theLibrary.length; i++) {
        const div = document.createElement("div");
        const book = theLibrary[i];
        div.innerText = `
        <b>Title</b>: ${book.title}<br>
        <b>Author</b>: ${book.author}<br>
        <b>Pages</b>: ${book.pages}<br>
        `;
    }

    parent.appendChild(div);
}