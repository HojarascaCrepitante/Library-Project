let myLibrary = [];

function Book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
const book1 = new Book("Rayuela","Julio Cortazar", 500, "Read");
const book2 = new Book("El aleph","Jorge Borges", 300, "Not read");
const book3 = new Book("Historia de Mayta", "Mario Vargas Llosa", 300, "Read");
myLibrary.push(book1,book2,book3)
    let myBooks = document.querySelector('.books')
        function display(){
           myLibrary.forEach(book => {
            let bookCard = document.createElement('div');
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
           });
        
        }
        display()