// Get modal elements
const modal = document.getElementById("modal"); 
const openModal = document.getElementById("openModal"); 
const closeModal = document.querySelector(".close"); 

// Get form elements
const modalTitle = document.getElementById("modalTitle");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Open modal when button is clicked
openModal.onclick = function () {
    modal.style.display = "block";
    showLoginForm(); // Show login form by default
};

// Close modal when "X" button is clicked
closeModal.onclick = function () {
    modal.style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Function to show login form
function showLoginForm() {
    modalTitle.textContent = "Login";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
}

// Function to show signup form
function showSignupForm() {
    modalTitle.textContent = "Sign Up";
    loginForm.style.display = "none";
    signupForm.style.display = "block";
}

// When clicking "Sign up" link, show signup form
showSignup.onclick = function (event) {
    event.preventDefault();
    showSignupForm();
};

// When clicking "Login" link, show login form
showLogin.onclick = function (event) {
    event.preventDefault();
    showLoginForm();
};

function addToCart(button) {
    let productDiv = button.parentElement;
    let name = productDiv.getAttribute("data-name");
    let price = parseFloat(productDiv.getAttribute("data-price")); // Convert to number

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
        existingItem.totalprice = (parseFloat(existingItem.totalprice) + price).toFixed(2); // Correctly add prices
    } else {
        cart.push({ name, price, totalprice: price.toFixed(2), quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

    updateTotalCartPrice(); // Update total price after adding item
    

// Function to calculate and display total cart price
function updateTotalCartPrice() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalCartPrice = cart.reduce((sum, item) => sum + parseFloat(item.totalprice), 0);

    // Display the total price
    document.getElementById("totalCartPrice").textContent = `Total Cart Price: $${totalCartPrice.toFixed(2)}`;
}


function goToCart() {
  window.location.href = "cart.html";
}

function submit()
{
    alert('Thank you for your feedback');
}
