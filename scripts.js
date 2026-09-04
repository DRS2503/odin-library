const myLibrary = [];

//tabledata1.textContent = "Hello World"

//Create Book Constructor
function book(title, author, year){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.year = year;

}

//Create seperate function that allows user to pass the book arguments
function addBookToLibrary(title, author, year){
    //Creates the new book object
    const book1 = new book(title, author, year);
    myLibrary.push(book1);
    addBookToTable(myLibrary[myLibrary.length - 1]);
}

function addBookToTable(book){
    console.log(book);
    const tableBody = document.querySelector('tbody');
    const tableRow = document.createElement('tr');  
    tableBody.append(tableRow);
    const value = Object.values(book);
    for(let i = 0; i < 4; i++){
        console.log(value[i]);
        const tabledata1 = document.createElement('td');
        tabledata1.textContent = value[i];
        tableRow.append(tabledata1);
    }
}






addBookToLibrary("Harry Potter and the Half-Blood Prince", "J.K. Rowling", 2005);
addBookToLibrary("Maze Runner", "James Dashner", 2009);

