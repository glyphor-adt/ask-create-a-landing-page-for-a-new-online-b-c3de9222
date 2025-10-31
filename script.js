// Mock data for featured books
const featuredBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
];

// Function to display featured books
function displayFeaturedBooks() {
    const bookContainer = document.getElementById('bookContainer');
    bookContainer.innerHTML = ""; // Clear previous content
    featuredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `<h3 class="book-title">${book.title}</h3><p>${book.author}</p>`;
        bookContainer.appendChild(bookCard);
    });
}

// Initialize features when the page is loaded
document.addEventListener('DOMContentLoaded', displayFeaturedBooks);