document.addEventListener("DOMContentLoaded", function () {

    // Display current year automatically
    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Login form validation
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {

            const username = document.getElementById("username");
            const password = document.getElementById("password");

            if (!username || !password) {
                return;
            }

            if (username.value.trim() === "" || password.value.trim() === "") {
                event.preventDefault();
                alert("Please enter both username and password.");
                return;
            }

            alert("Login successful!");
        });
    }

    // Registration form validation
    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {

            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirmPassword");

            if (password && confirmPassword) {

                if (password.value !== confirmPassword.value) {
                    event.preventDefault();
                    alert("Passwords do not match.");
                    return;
                }
            }

            alert("Registration successful!");
        });
    }

    // Add-to-cart buttons
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const bookName = button.dataset.book || "Item";

            alert(bookName + " has been added to your cart.");

        });

    });

    // Simple form reset confirmation
    const resetButtons = document.querySelectorAll("input[type='reset']");

    resetButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const confirmed = confirm("Do you want to clear the form?");

            if (!confirmed) {
                event.preventDefault();
            }

        });

    });

});
