let myLibrary = [];

// basic book function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
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
// Get form, item, and wishlist
let formPopup = document.querySelector("#formID");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let status = document.querySelector("#status");
let cards = document.querySelector("#cards");

formPopup.addEventListener(
  "submit",
  function (event) {
    // Don't submit the form
    event.preventDefault();

    // Ignore it if the wishlist item is empty
    if (title.value.length < 1) return;
    if (author.value.length < 1) return;
    if (pages.value.length < 1) return;

    // Add book as Card

    createBookDiv();

    // Clear input
    title.value = "";
    author.value = "";
    pages.value = "";
  },
  false
);

// creating the book div element
const Cards = document.querySelector("#cards");
function createBookDiv() {
  const newCard = document.createElement("div");
  newCard.setAttribute("id", "cardEntry");
  newCard.classList.add("card");

  // Additional CSS
  newCard.style.fontSize = "22px";
  newCard.style.overflow = "hidden";

  // Rendered Text Content
  newCard.textContent = [
    title.value + " by " + author.value + ". " + pages.value + " pages.",
  ];
  Cards.appendChild(newCard);

  // Adding the Remove Button Button
  newCard.innerHTML =
    newCard.innerHTML +
    "<button id='removeBtn' onclick='removeBook()' type='button'> Remove </button>";
}

// Remove Card from front-end
let removeBtn = document.getElementById("removeBtn");
let cardEntry = document.getElementById("cardEntry");
function removeBook() {
  document.getElementById("cardEntry").remove();
}
