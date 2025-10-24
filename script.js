
let secHand = document.getElementById('sec');
let angle = 0

setInterval(() => {
    let date = new Date();
    let sec = date.getSeconds();
    let seccal = sec * 6 
    secHand.style.transform = `rotate(${seccal}deg)`;
},1000);

let minHand = document.getElementById('min');
setInterval(() => {
    let date = new Date();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let minCal = min * 6 + sec * 0.1
    minHand.style.transform = `rotate(${minCal}deg)`;
},1000);

let hrHand = document.getElementById('hr');
setInterval(() => {
    let date = new Date();
    let hr = date.getHours() % 12;
    let min = date.getMinutes();
    let hrCal = hr * 30 + min * 0.5
    hrHand.style.transform = `rotate(${hrCal}deg)`;
},1000);



