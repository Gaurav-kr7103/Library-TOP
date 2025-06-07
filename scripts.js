const myLibrary = []

function Book (title, author, pages, read) {
    if (!new.target) {
        throw Error("Book constructor must be called with 'new'");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}

function addBookToLibrary () {
    let title = prompt ("Enter the Title");
    let author = prompt ("Enter the Author Name");
    let pages = prompt ("Enter the Number of Pages");
    let readInput = prompt ("Have you read the book? (yes/no)");
    let read = readInput && readInput.toLowerCase() === 'yes';
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks () {
    myLibrary.forEach(book => {
        book.info();
    });
}