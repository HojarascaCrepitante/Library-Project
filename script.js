let myLibrary = [];

function Book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    
}
let myBooks = document.querySelector('.books')
        function display(book){
                let bookCard = document.createElement('div');
                    bookCard.classList.add('bookCard')
                let table = document.createElement('table');
                let thead = document.createElement('thead');
                let tbody = document.createElement('tbody');
                bookCard.appendChild(table);
                table.appendChild(thead);
                table.appendChild(tbody);
                    myBooks.appendChild(bookCard);
                let row1 = document.createElement('tr');
                    let heading1 = document.createElement('th');
                        heading1.textContent = "Title";
                    let heading2 = document.createElement('th');
                        heading2.textContent = "Author";
                    let heading3 = document.createElement('th');
                        heading3.textContent = "Pages";
                    let heading4 = document.createElement('th');
                        heading4.textContent = "Status";
                    row1.appendChild(heading1);
                    row1.appendChild(heading2);
                    row1.appendChild(heading3);
                    row1.appendChild(heading4);
                        thead.appendChild(row1);
                let row2 = document.createElement('tr');
                    let row2_data1 = document.createElement('td');
                        row2_data1.textContent = book.title;
                    let row2_data2 = document.createElement('td');
                        row2_data2.textContent = book.author;
                    let row2_data3 = document.createElement('td');
                        row2_data3.textContent = book.pages;
                    let row2_data4 = document.createElement('td');
                        row2_data4.textContent = book.status;
                    row2.appendChild(row2_data1);
                    row2.appendChild(row2_data2);
                    row2.appendChild(row2_data3);
                    row2.appendChild(row2_data4);
                        tbody.appendChild(row2);
                myLibrary.push(book)
                bookCard.dataset.index = myLibrary.indexOf(book);
                let removeButton = document.createElement('button')
                    removeButton.classList.add('removeButton')
                    removeButton.textContent = 'Remove from Library'
                    removeButton.addEventListener('click', () =>{
                        let i = bookCard.dataset.index;
                        myLibrary.splice(i, 1);
                        if (bookCard.dataset.index == i){
                            bookCard.remove()
                        }
                })
                bookCard.appendChild(removeButton)
        };
            
        let popupBtn = document.getElementById('popup-button')
            popupBtn.addEventListener('click', popup)
        let cancelButton = document.getElementById('cancelButton')
            cancelButton.addEventListener('click', closeForm)
        let myForm = document.querySelector('.myForm')
            myForm.addEventListener('submit', prevent)
                function popup(){
                    myForm.style.display = "flex";
                }
                function closeForm(){
                    myForm.style.display = 'none';
                }
                
                function createBook(){
                    let title = document.getElementById('book-title').value;
                        let author = document.getElementById('book-author').value;
                        let pages = document.getElementById('book-pages').value;
                        let status = document.getElementById('book-status');
                        if(!status.checked){
                            status = "Not read";
                        }
                        if(status.checked){
                            status = "Read"
                        }
                        let bookObj = new Book(title,author,pages,status);
                        console.log(bookObj)
                        display(bookObj)
                        return bookObj
                }
                function prevent(e){
                    closeForm()
                    e.preventDefault();
                    createBook(); 
                }
               