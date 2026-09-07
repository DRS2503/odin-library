const myLibrary = [];
let isClicked = false;

function book(title, author, year){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.year = year;

}

function addBookToLibrary(title, author, year){
    const book1 = new book(title, author, year);
    myLibrary.push(book1);
    makeTable();
}

function makeTable(){
    let numIndex = 0;
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = "";

    for(let j = 0; j < myLibrary.length; j++){
        const tableRow = document.createElement('tr');  
        tableBody.append(tableRow);

        const colOneData = document.createElement('td');

        const buttonRead = document.createElement('button');
        buttonRead.textContent = 'Read';
        buttonRead.className = 'read-button';
        buttonRead.addEventListener('click', handleButtonClickRead);

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Remove';
        buttonRemove.className = 'remove-button';
        buttonRemove.id = numIndex;
        numIndex += 1; 
        buttonRemove.addEventListener('click', handleButtonClickRemove);

        tableRow.append(colOneData);
        colOneData.append(buttonRead, buttonRemove);

        const value = Object.values(myLibrary[j]);
        for(let i = 0; i < 4; i++){
            const tabledata1 = document.createElement('td');
            tabledata1.textContent = value[i];
            tableRow.append(tabledata1);
        }
    }
}

function handleButtonClickRead(event){
    const btn = event.currentTarget
    if(isClicked === false){
        btn.style.backgroundColor = 'green';
        isClicked = true;
    }
    else{
        btn.style.backgroundColor = 'white';
        isClicked = false;
    }
}

function handleButtonClickRemove(event){
    const item = event.currentTarget.id;
    myLibrary.splice(item, 1);
    makeTable();
}

const openBtn = document.querySelector('#new-book');
const dialog = document.querySelector('#dialog-book');

openBtn.addEventListener('click', () => {
    dialog.showModal();
})

const submitBtn = document.querySelector('#submitBtn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');

submitBtn.addEventListener('click', ()=>{
    addBookToLibrary(title.value, author.value, year.value);
})



addBookToLibrary("Harry Potter and the Half-Blood Prince", "J.K. Rowling", 2005);
addBookToLibrary("Maze Runner", "James Dashner", 2009);

