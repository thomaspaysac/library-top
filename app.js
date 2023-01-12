let myLibrary = [];

// basic functions to add books and display library
let Book = function (title, author, read) {
  this.title = title,
  this.author = author,
  this.read = read,
  this.info = function () {
    return `${title} is a book by ${author}. I have ${read} it.`;
  }
};

let addBookToLibrary = function (title) {
  myLibrary.push(title);
};

let displayLibrary = function () {
for (const Book of myLibrary) {
  console.log(Book.title);
  }
};

//Quick test setup
const SPIN = new Book ('Spin', 'Robert Charles Wilson', 'read');
const THE_THIRD_POLICEMAN = new Book ('The Third Policeman', 'Flann O\'Brien', 'not read');
const ALL_SYSTEMS_RED = new Book ('All Systems Red', 'Martha Wells', 'read');
addBookToLibrary(SPIN);
addBookToLibrary(THE_THIRD_POLICEMAN);
addBookToLibrary(ALL_SYSTEMS_RED);

// adding books cards to the DOM