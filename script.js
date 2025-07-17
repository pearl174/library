let theLibrary = [];

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

Book.prototype.toggleRead = () => {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    theLibrary.push(book);
}

function display() {
    const parent = document.querySelector(".library-container");
    parent.innerHTML = "";
    for (let i = 0; i < theLibrary.length; i++) {
        const div = document.createElement("div");
        const book = theLibrary[i];
        div.innerHTML = `
        <b>${book.title}</b><br><br>
        ${book.author}<br>
        ${book.pages} pages<br>
        ${book.read? "Read":"Not Read"}<br>
        <button class="toggle-read">${book.read? "Mark as Not Read":"Mark as Read"}</button>
        <button class="remove-book" data-id="${book.id}">Remove</button>
        `;
        parent.appendChild(div);
    }
}

const tolkien = addBookToLibrary("The Hobbit", "Tolkien", 256, false);
const tolkien2 = addBookToLibrary("The Hobbit", "Tolkien", 256, false);
display();

// add event listener to add book
const button = document.querySelector(".add-book");
button.addEventListener("click", () => {
    document.querySelector("#form-dialog").showModal();
});

const formButton = document.querySelector("#submit-book");
formButton.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.querySelector("#book-form")
    if (!form.checkValidity()) {
        form.reportValidity(); // Show built-in validation UI
        return;
    }
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    if (parseInt(pages) <= 0) {
    alert("Page count must be positive!");
    return;
    }
    addBookToLibrary(title, author, pages, read);
    document.querySelector("#form-dialog").close();
    document.querySelector("#book-form").reset();
    display();
});

document.querySelector(".library-container").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-book")) {
        const idToRemove = parseInt(e.target.dataset.id);
        theLibrary = theLibrary.filter(book => book.id !== idToRemove);
        e.target.closest("div").remove();
    }
});
