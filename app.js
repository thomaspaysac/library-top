let myLibrary = [];

const ADD_BOOK_BUTTON = document.querySelector('.add-book__button');
const BACKDROP = document.querySelector('.backdrop');
const MODAL = document.querySelector('.new-book__modal');
const LIBRARY_CONTAINER = document.getElementById('library-container');

// basic functions to add books to myLibrary array and display library
let Book = function (title, author, read) {
  this.title = title,
  this.author = author,
  this.read = read,
  this.info = function () {
    return `${title} is a book by ${author}. I have ${read} it.`;
  };
};

let addBookToLibrary = function (title) {
  myLibrary.push(title);
};

let displayLibrary = function () {
for (const Book of myLibrary) {
  console.log(Book.title);
  }
};

// Open add book form
ADD_BOOK_BUTTON.addEventListener('click', () => {
  BACKDROP.style.display = 'block';
  MODAL.style.display = 'block';
});

BACKDROP.addEventListener('click', () => {
  BACKDROP.style.display = 'none';
  MODAL.style.display = 'none';
});

// Get book data :
// Get input from the form,
// Assign inputs to new Book constructor, and add the book to the library
// Create a book card for each item in array
const updateLibrary = function () {
  for (const Book of myLibrary) {
    const BOOK_CARD = document.createElement('div'); // create book card
    BOOK_CARD.classList.add('book-card');
    LIBRARY_CONTAINER.appendChild(BOOK_CARD);
    const BOOK_CARD_TITLE = document.createElement('div'); // add book title div
    BOOK_CARD_TITLE.classList.add('book-card__title');
    BOOK_CARD_TITLE.textContent = Book.title;
    BOOK_CARD.appendChild(BOOK_CARD_TITLE);
    const BOOK_CARD_AUTHOR = document.createElement('div'); // add book title div
    BOOK_CARD_AUTHOR.classList.add('book-card__author');
    BOOK_CARD_AUTHOR.textContent = Book.author;
    BOOK_CARD.appendChild(BOOK_CARD_AUTHOR);
    const BOOK_CARD_STATUS = document.createElement('div'); // add book status div
    BOOK_CARD_STATUS.classList.add('book-card__status');
    if (Book.read === 'read') {
      BOOK_CARD_STATUS.classList.add('read');
      } else {
      BOOK_CARD_STATUS.classList.add('not-read');
    }
    BOOK_CARD_STATUS.textContent = Book.read;
    BOOK_CARD.appendChild(BOOK_CARD_STATUS);
  }
};

//Quick test setup
const SPIN = new Book ('Spin', 'Robert Charles Wilson', 'read');
const THE_THIRD_POLICEMAN = new Book ('The Third Policeman', 'Flann O\'Brien', 'not read');
const ALL_SYSTEMS_RED = new Book ('All Systems Red', 'Martha Wells', 'read');
addBookToLibrary(SPIN);
addBookToLibrary(THE_THIRD_POLICEMAN);
addBookToLibrary(ALL_SYSTEMS_RED);

