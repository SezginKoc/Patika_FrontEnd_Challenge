//!  Ecma Script 2015 (ES6) ile birlikte getirilmiştir.

// let userName = prompt("Kullanıcı Bilginizi Giriniz")
// let info = document.querySelector(".ternary")
// let arr = ["#", "/", "+", "-", "*", "$", "%", "&", "="];
// let i;

// TODO) soru işartine kadar koşul yazılır soru işaretinden sonra koşul doğru ise yapılacak yazılır iki noktadan sonra koşul yanlışsa yapılacak yazılır.

// if (parseInt(userName) == userName) {
//     console.log("Sadece Sayı Girmeyiniz!!")
// } else {
//     let j = 0;
//     for (let i = 0; i < userName.length; i++) {
//         if (arr.includes(userName[i])) {
//             console.log(`J degeri:${++j}`);
//         }
//     }
//     if (j > 0) { console.log("Özel Karakter Girmeyiniz") }

//     else if (j == 0) {
//         info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı Bilginiz Bulunamadı :("}`
//     }
// }

let info = document.querySelector(".ternary");
let puan = prompt("Aldığınız Notu Giriniz")
let result;
const smile =
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const sad =
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`


if (puan >= 0 && puan <= 100) {
    info.classList.add("text-primary")
    if (puan >= 90) {
        result = `${smile} AA`
    } else if (puan >= 85) {
        result = `${smile} BA`
    } else if (puan >= 80) {
        result = `${smile} BB`
    } else if (puan >= 75) {
        result = `${smile} CB`
    } else if (puan >= 70) {
        result = `${smile} CC`
    } else if (puan >= 65) {
        result = `${smile} DC`
    } else if (puan >= 60) {
        result = `${smile} DD`
    } else if (puan >= 50) {
        result = `${smile} FD`
    } else if (puan >= 0) {
        result = `${sad} FF`
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
    }
    info.innerHTML = `Sonuç: ${result} --> ${puan}`
}
else {
    info.innerHTML = "Not aralığı 0-100 olmalı !!!"
}



