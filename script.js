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
    
}