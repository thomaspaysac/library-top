// global variables definitions
let myLibrary = [];
let bookCard;
let bookCardTitle;
let bookCardAuthor;
let bookCardStatus;
let bookCardRating;
let addedBook;
let bookStatusButton;
let removeBookButton;
let editBookButton;
let bookTitle;
let bookAuthor;
let bookStatus;
let bookRating;

const ADD_BOOK_BUTTON = document.querySelector('.add-book__button');
const BACKDROP = document.querySelector('.backdrop');
const MODAL = document.querySelector('.new-book__modal');
const LIBRARY_CONTAINER = document.getElementById('library-container');


// basic functions to add books to myLibrary array and display library
let Book = function (title, author, status, rating) {
  this.title = title,
  this.author = author,
  this.status = status,
  this.rating = rating,
  this.info = function () {
    return `${title} is a book by ${author}. I have ${status} it.`;
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


// Open add book form and visuals
const closeModal = () => {
  BACKDROP.style.display = 'none';
  MODAL.style.display = 'none';
};

const openModal = () => {
  BACKDROP.style.display = 'block';
  MODAL.style.display = 'block';
};

ADD_BOOK_BUTTON.addEventListener('click', () => openModal());
BACKDROP.addEventListener('click', () => closeModal());


// DOM manipulation functions
let createBookCard = function () { // create book card
  bookCard = document.createElement('div'); 
  bookCard.classList.add('book-card');
  LIBRARY_CONTAINER.appendChild(bookCard);
};

let createBookTitle = function () { // add book title div
  bookCardTitle = document.createElement('div'); 
  bookCardTitle.classList.add('book-card__title');
  bookCardTitle.textContent = addedBook.title;
  bookCard.appendChild(bookCardTitle);
};

let createBookAuthor = function () { // add book author div
  bookCardAuthor = document.createElement('div'); 
  bookCardAuthor.classList.add('book-card__author');
  bookCardAuthor.textContent = addedBook.author;
  bookCard.appendChild(bookCardAuthor);
};

let createBookRating = function () {
  bookCardRating = document.createElement('div');
  bookCardRating.classList.add('book-card__rating');
  if (addedBook.rating !== undefined) {
  bookCardRating.textContent = '★'.repeat(addedBook.rating);
  }
  bookCard.appendChild(bookCardRating);
};

let createBookStatus = function () { // add book status div
  bookCardStatus = document.createElement('div'); 
  bookCardStatus.classList.add('book-card__status');
  if (bookStatus === true) {
    bookCardStatus.textContent = 'Read';
    bookCardStatus.classList.add('read');
    } else {
    bookCardStatus.textContent = 'Not read';
  }
  bookCard.appendChild(bookCardStatus);
};

let createRemoveButton = function () { // add remove book button
  removeBookButton = document.createElement('div'); 
  removeBookButton.classList.add('book-card__remove');
  bookCard.appendChild(removeBookButton);
};

let createEditButton = function () { // add edit book button
  editBookButton = document.createElement('div'); 
  editBookButton.classList.add('book-card__edit');
  bookCard.appendChild(editBookButton);
};


// add toggle functionality for read/not read status
document.addEventListener('click', function (e) {
  const target = e.target.closest('.book-card__status');
  if (target.textContent === 'Read') {
    target.classList.remove('read');
    target.textContent = 'Not read';
  } else {
    target.classList.add('read');
    target.textContent = 'Read';
  }
});

document.addEventListener('click', function(e) {
  const target = e.target.closest('.book-card__remove');
  const parent = target.parentNode; // get index of the book to remove it from array
  const getTitle = (parent.firstChild).textContent;
  console.log(getTitle);
  const index = myLibrary.findIndex(object => {
    return object.title === getTitle;
  });
  myLibrary.splice(index, 1);
  if (target) {
    const parent = target.parentNode;
    parent.remove();
  }
});


// Get book data from the form, then create a card for the book
function getBookData (form) {
  bookTitle = form.title.value;
  bookAuthor = form.author.value;
  bookStatus = form.status.checked;
  bookRating = form.rating.value;
  addedBook = new Book (bookTitle, bookAuthor, bookStatus, bookRating);
  myLibrary.push(addedBook);
  createBookCard();
  createBookTitle();
  createBookAuthor();
  createBookRating();
  createBookStatus();
  createRemoveButton();
  createEditButton();
  form.title.value = ''; // clean-up stuff
  form.author.value = '';
  form.status.checked = false;
  form.rating.checked = false;
  closeModal();
}


// Create a book card for each item in array
const updateLibrary = function () {
  LIBRARY_CONTAINER.innerHTML = '';
  for (const Book of myLibrary) {
    const bookCard = document.createElement('div'); // create book card
    bookCard.classList.add('book-card');
    LIBRARY_CONTAINER.appendChild(bookCard);
    const bookCardTitle = document.createElement('div'); // add book title div
    bookCardTitle.classList.add('book-card__title');
    bookCardTitle.textContent = Book.title;
    bookCard.appendChild(bookCardTitle);
    const bookCardAuthor = document.createElement('div'); // add book title div
    bookCardAuthor.classList.add('book-card__author');
    bookCardAuthor.textContent = Book.author;
    bookCard.appendChild(bookCardAuthor);
    bookCardRating = document.createElement('div');
    bookCardRating.classList.add('book-card__rating');
    bookCardRating.textContent = '★'.repeat(Book.rating);
    bookCard.appendChild(bookCardRating);
    bookCardStatus = document.createElement('div'); 
    bookCardStatus.classList.add('book-card__status');
    if (Book.status === 'Read') {
    bookCardStatus.textContent = 'Read';
    bookCardStatus.classList.add('read');
    } else {
    bookCardStatus.textContent = 'Not read';
    }
    bookCard.appendChild(bookCardStatus);
    removeBookButton = document.createElement('div'); // add remove button
    removeBookButton.classList.add('book-card__remove');
    bookCard.appendChild(removeBookButton);
    editBookButton = document.createElement('div'); 
    editBookButton.classList.add('book-card__edit');
    bookCard.appendChild(editBookButton);  
  }
};




//Quick test setup
const SPIN = new Book ('Spin', 'Robert Charles Wilson', 'Read', '3');
const THE_THIRD_POLICEMAN = new Book ('The Third Policeman', 'Flann O\'Brien', 'Not read');
const ALL_SYSTEMS_RED = new Book ('All Systems Red', 'Martha Wells', 'Read', '1');
addBookToLibrary(SPIN);
addBookToLibrary(THE_THIRD_POLICEMAN);
addBookToLibrary(ALL_SYSTEMS_RED);