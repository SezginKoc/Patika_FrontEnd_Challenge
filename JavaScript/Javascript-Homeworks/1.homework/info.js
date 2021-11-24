let input = prompt("Adınızı Giriniz");


let name = document.querySelector(".name");
let time = document.querySelector(".time");
name.innerHTML = input;



function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}



let timeScreen = function () {
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`
    setTimeout(timeScreen, 1000);
}

timeScreen();

