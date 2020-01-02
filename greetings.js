const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const use_ls = "currentUser",
        showing_cn = "showing";

function saveName(text){
    localStorage.setItem(use_ls, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(showing_cn);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(showing_cn);
    greeting.classList.add(showing_cn);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(use_ls);
    if(currentUser == null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();