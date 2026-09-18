const myLibrary = [];

class Book{
    constructor(title, author, year, read){
        this.Id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = read;
    }
}

//New Book Button
const dialog = document.querySelector('dialog');
const newBookBtn = document.getElementById('new-book');
newBookBtn.addEventListener('click', () => {
    dialog.showModal();
})


//Submit Button
const submitBtn = document.getElementById('submit-btn');
const form = document.querySelector('form');
submitBtn.addEventListener('click', () => {
    const formValues = new FormData(form);
    if(formValues.get('title') == '' || formValues.get('author') == '' || formValues.get('year') == '' || formValues.get('read') == ''){
        return
    }
    const book = new Book(formValues.get('title'), formValues.get('author'), formValues.get('year'), formValues.get('read'));
    myLibrary.push(book);
    form.reset();
    render();
})


//Close Button
const closeBtn = document.getElementById('close-button');
closeBtn.addEventListener('click', () =>{
    dialog.close();
})


function render(){
    const tableBody = document.querySelector('tbody');
    tableBody.textContent = ""
    const librarySize = myLibrary.length;

    //Make each row
    for(let row = 0; row < librarySize; row++){
        const tableRow = document.createElement('tr');
        tableBody.append(tableRow);

        //Remove Button
        const tableData = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.id = row;
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener('click', (e) => {
            const num = e.currentTarget.id;
            myLibrary.splice(num, 1);
            render();
        })
        tableRow.append(tableData);
        tableData.append(removeBtn);

        //Book data add to row
        const values = Object.values(myLibrary[row]);
        for(let col = 0; col < 5; col++) {
            const tableDataBook = document.createElement('td');
            tableDataBook.textContent = values[col];
            tableRow.append(tableDataBook);
        }
    }
}

//Default book parameters and render them initailly 
const book1 = new Book('d', 'dd', 2005, 'yes');
const book2 = new Book('e', 'ee', 2005, 'no');
const book3 = new Book('f', 'ff', 2005, 'yes');
myLibrary.push(book1, book2, book3);
render();

