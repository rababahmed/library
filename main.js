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
// Get form, item, and wishlist
let formPopup = document.querySelector("#formID");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let cards = document.querySelector("#cards");

formPopup.addEventListener(
  "submit",
  function (event) {
    // Don't submit the form
    event.preventDefault();

    // Ignore it if the wishlist item is empty
    if (title.value.length < 1) return;
    if (author.value.length < 1) return;
    if (author.value.length < 1) return;

    // Add book as Card
    cards.innerHTML =
      cards.innerHTML +
      "<div>" +
      title.value +
      ", by " +
      author.value +
      ", " +
      pages.value +
      " pages.";
    ("</div>");
    // Clear input
    title.value = "";
    author.value = "";
    pages.value = "";
  },
  false
);
