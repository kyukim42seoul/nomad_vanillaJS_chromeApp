const image = ["red.jpg", "orange.jpg", "yellow.jpg", "green.jpg", "blue.jpg", "indigo.jpg", "purple.jpg"];
  
const body = document.querySelector("body");
const button = document.querySelector(".backgroundBtn");

function getImage() {
  const imageIndex = Math.floor(Math.random() * image.length);
  body.style.backgroundImage = `url(img/${image[imageIndex]})`;
  const bodyTitle = body.querySelector(".bodyTitle");
  const clock = body.querySelector(".clock");
  const greeting = body.querySelector(".greeting");
  const weather = body.querySelector(".weather");
  const todoList = body.querySelector(".todo-list");
  if (image[imageIndex] !== "yellow.jpg") {
    bodyTitle.style.color = "white";
    clock.style.color = "white";
    greeting.style.color = "white";
    weather.style.color = "white";
    todoList.style.color = "white";
  } else {
    bodyTitle.style.color = "black";
    clock.style.color = "black";
    greeting.style.color = "black";
    weather.style.color = "black";
    todoList.style.color = "black";
  }
}

getImage();

button.addEventListener("click", getImage);
  