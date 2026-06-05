const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.textContent = "☀️";
    }
    else{
        themeToggle.textContent = "🌙";
    }
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for contacting me!");

    form.reset();
});
