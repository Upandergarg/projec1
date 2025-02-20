
function toggleCommunityEvents() {
const communityEvents = document.getElementById('communityEvents');
if (communityEvents.style.display === 'none') {
    communityEvents.style.display = 'block';
    communityEvents.scrollIntoView({ behavior: 'smooth' });
} else {
    communityEvents.style.display = 'none';
}
}
document.querySelector('a[href="#footer"]').addEventListener('click', function(e) {
e.preventDefault();

const footerSection = document.getElementById('footer');
footerSection.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('a[href="#exchangeBooksSection"]').addEventListener("click", function(e) {
e.preventDefault();
document.querySelector("#exchangeBooksSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById('hamburger').addEventListener('click', function() {
const navLinks = document.querySelector('nav ul');
navLinks.classList.toggle('active');
});
function toggleSidebar() {
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

if (sidebar.style.left === "0px") {
sidebar.style.left = "-250px"; // Hide sidebar
mainContent.style.marginLeft = "0"; // Adjust main content margin
} else {
sidebar.style.left = "0"; // Show sidebar
mainContent.style.marginLeft = "250px"; // Adjust main content margin
}
}


let cart = [];
let totalPrice = 0;

function addToCart(title, price) {
cart.push(title);
totalPrice += price;
document.getElementById("total-books").innerText = cart.length;
document.getElementById("total-price").innerText = totalPrice;
document.getElementById("selected-books").innerText = cart.join(', ');
}
function buyBooks() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add some books to proceed.");
    } else {
        alert(`Thank you for your purchase! You bought ${cart.length} book(s) for ₹${totalPrice.toFixed(2)}.`);
        // Clear the cart
        cart = [];
        totalPrice = 0;
        // Update the display to reflect an empty cart
        document.getElementById("total-books").innerText = "0";
        document.getElementById("total-price").innerText = "0.00";
        document.getElementById("selected-books").innerText = "None";
        // Redirect to confirmation page
        window.location.href = "buy.html";
    }
}

function showDonateSection() {
const donateSection = document.getElementById('donateSection');
donateSection.style.display = donateSection.style.display === 'none' ? 'block' : 'none';
}
function showBestSellers() {
const books = document.querySelectorAll('.book');
books.forEach(book => {
if (book.getAttribute('data-category') === 'bestseller') {
book.style.display = 'block';
} else {
book.style.display = 'none';
}
});
}
function showCategory(category) {
const books = document.querySelectorAll('.book');
books.forEach(book => {
if (book.getAttribute('data-category') === category) {
book.style.display = 'block';
} else {
book.style.display = 'none';
}
});
}
function showAllBooks() {
const books = document.querySelectorAll('.book');
books.forEach(book => {
if (book.getAttribute('data-category') === 'Home') {
book.style.display = 'block';
} else {
book.style.display = 'none';
}
});
}
function searchBooks() {
const input = document.getElementById("search-input").value.toLowerCase();
const books = document.querySelectorAll('.book');
books.forEach(book => {
    const title = book.querySelector('h3').innerText.toLowerCase();
    if (title.includes(input)) {
        book.style.display = "block";
    } else {
        book.style.display = "none";
    }
});    
}
function showNewArrivals() {
const books = document.querySelectorAll('.book');
books.forEach(book => {
if (book.getAttribute('data-category') === 'new-arrival') {
book.style.display = 'block';
} else {
book.style.display = 'none';
}
});
}

// Mock data for recommendations
const recommendations = {
    romance: ["Pride and Prejudice", "The Notebook", "Me Before You"],
    fantasy: ["The Hobbit", "Harry Potter", "Percy Jackson"],
    fiction: ["To Kill a Mockingbird", "1984", "The Great Gatsby"],
    nonfiction: ["Sapiens", "Educated", "Becoming"],
    science: ["Brief Answers to the Big Questions", "Cosmos", "The Selfish Gene"],
    trending: ["Project Hail Mary", "The Midnight Library", "The Seven Husbands of Evelyn Hugo"],
};

// Open the modal
function openModal() {
    document.getElementById("ai-modal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("ai-modal").style.display = "none";
    document.getElementById("ai-category").value = "";
    document.getElementById("ai-processing").style.display = "none";
    document.getElementById("ai-output").style.display = "none";
    document.getElementById("ai-recommendations").innerHTML = "";
}

// Simulate AI processing and show recommendations
function processAI() {
    const category = document.getElementById("ai-category").value;
    const processingDiv = document.getElementById("ai-processing");
    const outputDiv = document.getElementById("ai-output");
    const recommendationsList = document.getElementById("ai-recommendations");

    if (!category) {
        alert("Please select a category to get recommendations.");
        return;
    }

    // Show processing
    processingDiv.style.display = "block";
    outputDiv.style.display = "none";
    recommendationsList.innerHTML = "";

    setTimeout(() => {
        processingDiv.style.display = "none";

        // Get recommendations based on category
        const books = recommendations[category] || ["No recommendations found for this category."];
        outputDiv.style.display = "block";
        books.forEach((book) => {
            const li = document.createElement("li");
            li.textContent = book;
            recommendationsList.appendChild(li);
        });
    }, 2000); // Simulate 2 seconds of processing
}
