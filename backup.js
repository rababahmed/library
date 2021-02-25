let myLibrary = [];

// basic book function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return [title, author, pages];
  };
}

// open and close form
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// adding books to library
function addBookToLibrary() {}

// getting book details
const Main = document.querySelector("#main");
function addNewBook() {
  document.getElementById("popupForm").style.display = "block";
}

// add new Book
let title = Book(document.getElementsByName("title")[0].value);

const newBook = new Book(
  document.getElementsByName("title")[0].value,
  document.getElementsByName("author")[0].value,
  document.getElementsByName("pages")[0].value
);

// creating the book div element
const Cards = document.querySelector("#cards");
function createBookDiv() {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.setAttribute(
    "style",
    "top: 5vh; position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: rgb(36, 202, 161); border-radius: 15px; padding: 120px; max-width: 120px; max-height: 300px; margin: 15px; text-align: center; font-weight: 600; font-size: 18px;"
  );
  newCard.textContent = [title, " " + Book.author, " " + Book.pages];
  Cards.appendChild(newCard);
}

// prevent form refresh
let form = document.getElementById("formContainer");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

console.log(newBook.info());
