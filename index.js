const root = document.querySelector(".root");


function dateShow(){
    const date = new Date();
let hours = date.getHours
let minutes = date.getMinutes
let sec = date.getSeconds
    root.innerHTML = hours
}