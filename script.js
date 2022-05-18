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
            let txt = Object.values(book).join(' ');
            let card = document.createElement('div')
            card.classList.add('card')
            card.textContent= txt;
            myBooks.appendChild(card)         
           });
        
        }
        display()