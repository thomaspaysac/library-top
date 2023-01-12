// global variables definitions
let myLibrary = [];
let bookCard;
let bookCardTitle;
let bookCardAuthor;
let bookCardStatus;
let addedBook;
let bookStatusButton;
let removeBookButton;
let bookTitle;
let bookAuthor;
let bookStatus;

const ADD_BOOK_BUTTON = document.querySelector('.add-book__button');
const BACKDROP = document.querySelector('.backdrop');
const MODAL = document.querySelector('.new-book__modal');
const LIBRARY_CONTAINER = document.getElementById('library-container');


// basic functions to add books to myLibrary array and display library
let Book = function (title, author, status) {
  this.title = title,
  this.author = author,
  this.status = status,
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

let createRemoveButton = function () {
  removeBookButton = document.createElement('div'); // add remove button
  removeBookButton.classList.add('book-card__remove');
  removeBookButton.textContent = 'X';
  bookCard.appendChild(removeBookButton);
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
  addedBook = new Book (bookTitle, bookAuthor, bookStatus);
  myLibrary.push(addedBook);
  createBookCard();
  createBookTitle();
  createBookAuthor();
  createBookStatus();
  createRemoveButton();
  form.title.value = ''; // clean-up stuff
  form.author.value = '';
  form.status.checked = false;
  closeModal();
  //toggleBookStatus(); // update the array to allow toggling of read/not read
}







//Quick test setup
const SPIN = new Book ('Spin', 'Robert Charles Wilson', 'read');
const THE_THIRD_POLICEMAN = new Book ('The Third Policeman', 'Flann O\'Brien', 'not read');
const ALL_SYSTEMS_RED = new Book ('All Systems Red', 'Martha Wells', 'read');
addBookToLibrary(SPIN);
addBookToLibrary(THE_THIRD_POLICEMAN);
addBookToLibrary(ALL_SYSTEMS_RED);



// TEMPORARY CODE

/*let toggleBookStatus = function () {
  bookStatusButton = document.querySelectorAll('.book-card__status');
  for (let i = 0; i < bookStatusButton.length; i++) {
    bookStatusButton[i].addEventListener('click', function () {
      this.classList.toggle('read');
      if (this.textContent === 'Read') {
        this.textContent = 'Not read';
      } else if (this.textContent === 'Not read') {
        this.textContent = 'Read';
      }
    });
  } 
};*/


// Create a book card for each item in array
/*const updateLibrary = function () {
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
    const bookCardStatus = document.createElement('div'); // add book status div
    bookCardStatus.classList.add('book-card__status');
    if (Book.status === 'read') {
      bookCardStatus.classList.add('read');
      } else {
      bookCardStatus.classList.add('not-read');
    }
    bookCardStatus.textContent = Book.status;
    bookCard.appendChild(bookCardStatus);
  }
  toggleBookStatus();
};*/