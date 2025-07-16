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
    let book = new Book(title, author, pages, read);
    theLibrary.push(book);
}

function display() {
    const parent = document.querySelector(".library-container");
    for (let i = 0; i < theLibrary.length; i++) {
        const div = document.createElement("div");
        const book = theLibrary[i];
        div.innerHTML = `
        <b>${book.title}</b><br><br>
        ${book.author}<br>
        ${book.pages} pages<br>
        `;
        parent.appendChild(div);
    }
}

const tolkien = addBookToLibrary("The Hobbit", "Tolkien", 256, false);
const tolkien2 = addBookToLibrary("The Hobbit", "Tolkien", 256, false);
display();