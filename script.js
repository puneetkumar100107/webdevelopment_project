// Dark Mode
let themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "☀️";
    } else {
        themeButton.innerHTML = "🌙";
    }
});

// Contact Form
let form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.innerHTML = "Please fill all fields.";
    } else {
        formMessage.innerHTML = "Thank you, " + name + "! Your message has been received.";
        form.reset();
    }
});
