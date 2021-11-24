// let username=prompt("Kullanıcı Adınızı Giriniz:")

/* username.length ile bilgi girilip girilmediği kontrol edilir. 
   Aynı zamanda bunu direkt username yazarak da kontrol edebiliriz.*/


// if (username.length>0){
//     console.log(`Kullanıcı Adınız: ${username}`)
// } else {
//     console.log("Bilgi yok")
// }


let random=Math.ceil(Math.random()*10)
let guess=document.querySelector("#guess");
let start=document.querySelector("#start");
let result=document.querySelector("#result");
let show=document.querySelector("#show");


function deneme() {
    if (Number(guess.value)===random && guess.value!=null){
      result.innerHTML=`Bildiniz, tahmin:${guess.value}...`
      document.body.style.color="green"
    }
    else if(guess.value===""){
        result.innerHTML="Boş Girmeyiniz";
        document.body.style.color="orange"
    }else {
        result.innerHTML=`Bir daha ki sefere, random:${random} tahmin:${guess.value}...`
        document.body.style.color="red"
      }
}

start.addEventListener("click", deneme)
console.log(random)

