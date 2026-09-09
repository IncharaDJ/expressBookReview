```javascript
const axios = require("axios");

// Base URL of the ExpressBookReview API
const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/api/books`);
    console.log("All Books:");
    console.log(response.data);
  } catch (error) {
    console.error("Error retrieving books:", error.message);
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/api/books/${isbn}`);
    console.log(`Book with ISBN ${isbn}:`);
    console.log(response.data);
  } catch (error) {
    console.error("Error retrieving book by ISBN:", error.message);
  }
}

// Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/books/author/${encodeURIComponent(author)}`
    );
    console.log(`Books by author ${author}:`);
    console.log(response.data);
  } catch (error) {
    console.error("Error retrieving books by author:", error.message);
  }
}

// Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/books/title/${encodeURIComponent(title)}`
    );
    console.log(`Books with title ${title}:`);
    console.log(response.data);
  } catch (error) {
    console.error("Error retrieving book by title:", error.message);
  }
}

// Run the functions
async function main() {
  await getAllBooks();
  await getBookByISBN("9780143454212");
  await getBooksByAuthor("Paulo Coelho");
  await getBooksByTitle("The Alchemist");
}

main();
```

