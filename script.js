// Get modal elements
const modal = document.getElementById("modal"); // The modal (popup) element
const openModal = document.getElementById("openModal"); // The button to open the modal
const closeModal = document.querySelector(".close"); // The "X" button to close the modal

// Get form elements
const modalTitle = document.getElementById("modalTitle"); // The title of the modal
const loginForm = document.getElementById("loginForm"); // Login form
const signupForm = document.getElementById("signupForm"); // Signup form
const showSignup = document.getElementById("showSignup"); // Link to switch to Signup
const showLogin = document.getElementById("showLogin"); // Link to switch to Login

// Open modal when button is clicked
openModal.onclick = function () {
    modal.style.display = "block"; // Show modal
    showLoginForm(); // Show login form by default
};

// Close modal when "X" button is clicked
closeModal.onclick = function () {
    modal.style.display = "none"; // Hide modal
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Function to show login form
function showLoginForm() {
    modalTitle.textContent = "Login"; // Change modal title
    loginForm.style.display = "block"; // Show login form
    signupForm.style.display = "none"; // Hide signup form
}

// Function to show signup form
function showSignupForm() {
    modalTitle.textContent = "Sign Up"; // Change modal title
    loginForm.style.display = "none"; // Hide login form
    signupForm.style.display = "block"; // Show signup form
}

// When clicking "Sign up" link, show signup form
showSignup.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    showSignupForm(); // Call function to switch form
};

// When clicking "Login" link, show login form
showLogin.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    showLoginForm(); // Call function to switch form
};
