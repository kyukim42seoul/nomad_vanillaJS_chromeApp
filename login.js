const loginForm = document.querySelector(".loginForm");
const id = document.querySelector(".id");
const greeting = document.querySelector(".greeting");

function hiddenLoginForm(event) {
    event.preventDefault();

    if (id.value === "") {
        alert("It's empty!");
    } else {
        localStorage.setItem("id", id.value);
        greeting.innerText = `Hello ${localStorage.getItem("id")}!`;
        loginForm.classList.add("hidden");
        loginForm.style.display = "none";
        greeting.classList.remove("hidden");
    }
}

loginForm.addEventListener("submit", hiddenLoginForm);
