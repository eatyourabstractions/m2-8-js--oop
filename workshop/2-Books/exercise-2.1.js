// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, isRead){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
    }
}
let book1 = new Book("the gambler","psy-novel", "Fyodor dostoievsky", true);
let book2 = new Book("the bible","religion", "jesus christ", true);
let book3 = new Book("atlas shrugged","philosophy", "ayn rand", false);
let book4 = new Book("the divine relativity","philosophy", "charles hartshorne", true);
let book5 = new Book("the flintstones","sitcom-novel", "hannah barbera", false);

console.log(book1, book2, book3, book4, book5);
