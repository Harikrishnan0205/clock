
let min = document.getElementById('min');
let angle = 0

setInterval(() => {
    let date = new Date();
    let mins = date.getSeconds();
    let seccal = mins * 6
    min.style.transform = `rotate(${seccal}deg)`;
},1000)