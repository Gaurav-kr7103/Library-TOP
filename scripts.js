const myBook = [];

function Book (title, author, page_no, read) {
    if (!new.target) {
        throw Error(`Use "new" Keyword before Book`);
    }
    this.title = title;
    this.author = author;
    this.page_no = page_no;
    this.read = read;
    this.id = crypto.randomUUID();

    this.show_info = function() {
        return `The Author of "${this.title}" is "${this.author}" with ${this.page_no} pages which has been ${this.read? "read" : "not read yet"}.`;
    }
}

const addBook = document.querySelector("#add_new");
addBook.addEventListener("click", (event) => {
    event.preventDefault();
    addNewBook();
},false);

function addNewBook() {
    const title = document.querySelector("#book_title");
    const author = document.querySelector("#author_name");
    const page = document.querySelector("#page_no");
    const readContent = document.querySelector("#read");
    const read = readContent.checked? true : false;

    const newBook = new Book (title.value, author.value, page.value, read);
    myBook.push(newBook);
}


const cardHolder = document.querySelector(".card-holder");
const displayBook = document.querySelector("#display-book");
displayBook.addEventListener("click", ()=>{
    //all the child nodes (books) are removed
    const cards = document.querySelectorAll(".card-holder > div");
    console.log(cards);
    cards.forEach((card) => {
        cardHolder.removeChild(card);
    });

    //again all the child nodes will be added including new
    for (let i=0; i<myBook.length; i++) {
        const card = document.createElement("div");
        card.setAttribute ('class', `card`);
        card.setAttribute ('id', `card ${myBook[i].id}`);
        card.textContent = myBook[i].show_info();

        // //adding delete button to the cards
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "deleteButton");
        deleteButton.setAttribute("id", `${myBook[i].id}`);
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", ()=>{
            const id = deleteButton.id;
            const index = myBook.findIndex((book) => book.id === id)
            myBook.splice(index, 1);
        });
        card.append(deleteButton);
        cardHolder.append(card);
    }
});
