let myLibrary = [];

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

// Open add book form
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
    if (Book.status === 'read') {
      BOOK_CARD_STATUS.classList.add('read');
      } else {
      BOOK_CARD_STATUS.classList.add('not-read');
    }
    BOOK_CARD_STATUS.textContent = Book.status;
    BOOK_CARD.appendChild(BOOK_CARD_STATUS);
  }
  toggleBookStatus();
};

// Get book data from the form,
function getBookData (form) {
  let bookTitle = form.title.value;
  let bookAuthor = form.author.value;
  let bookStatus = form.read.value;
  let addedBook = new Book (bookTitle, bookAuthor, bookStatus);
  myLibrary.push(addedBook);
  form.title.value = '';
  form.author.value = '';
  closeModal();
  const BOOK_CARD = document.createElement('div'); // create book card
  BOOK_CARD.classList.add('book-card');
  LIBRARY_CONTAINER.appendChild(BOOK_CARD);
  const BOOK_CARD_TITLE = document.createElement('div'); // add book title div
  BOOK_CARD_TITLE.classList.add('book-card__title');
  BOOK_CARD_TITLE.textContent = addedBook.title;
  BOOK_CARD.appendChild(BOOK_CARD_TITLE);
  const BOOK_CARD_AUTHOR = document.createElement('div'); // add book title div
  BOOK_CARD_AUTHOR.classList.add('book-card__author');
  BOOK_CARD_AUTHOR.textContent = addedBook.author;
  BOOK_CARD.appendChild(BOOK_CARD_AUTHOR);
  const BOOK_CARD_STATUS = document.createElement('div'); // add book status div
  BOOK_CARD_STATUS.classList.add('book-card__status');
  if (Book.status === 'read') {
    BOOK_CARD_STATUS.classList.add('read');
    } else {
    BOOK_CARD_STATUS.classList.add('not-read');
  }
  BOOK_CARD_STATUS.textContent = addedBook.status;
  BOOK_CARD.appendChild(BOOK_CARD_STATUS);
  toggleBookStatus();
}

let toggleBookStatus = function () {
  let bookStatusButton = document.querySelectorAll('.book-card__status'); // toggle read status on click
  for (let i = 0; i < bookStatusButton.length; i++) {
    bookStatusButton[i].addEventListener('click', function () {
      this.classList.toggle('read');
      if (this.textContent === 'read') {
        this.textContent = 'not read';
      } else {
        this.textContent = 'read';
      }
    });
  }  
};

//Quick test setup
const SPIN = new Book ('Spin', 'Robert Charles Wilson', 'read');
const THE_THIRD_POLICEMAN = new Book ('The Third Policeman', 'Flann O\'Brien', 'not read');
const ALL_SYSTEMS_RED = new Book ('All Systems Red', 'Martha Wells', 'read');
addBookToLibrary(SPIN);
addBookToLibrary(THE_THIRD_POLICEMAN);
addBookToLibrary(ALL_SYSTEMS_RED);

