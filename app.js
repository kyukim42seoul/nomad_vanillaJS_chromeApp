if (localStorage.getItem("id") !== null) {
    const  greeting = document.querySelector(".greeting");
    greeting.innerText = `Hello ${localStorage.getItem("id")}!`
    greeting.classList.remove("hidden");
    const   loginForm = document.querySelector(".loginForm");
    loginForm.classList.add("hidden");
}
