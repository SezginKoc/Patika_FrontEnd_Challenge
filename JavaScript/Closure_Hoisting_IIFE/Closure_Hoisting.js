                    // ! CLOSURE

// (() =>{
//     let number=5;
//     inc=()=>{
//         console.log(++number);
//     }
//     inc();
//     inc();
//     inc();
// }) ();


/* Çıktı olarak 6 , 7, 8  olur. Çünkü number değişkeni iç fonksiyonda 
tanımlı değiş dışta tanımlı. O yüzden fonksiyon her çağrıldığında number 
bellekte tutulduğu için eski değerinden devam eder. 
İç fonksiyonda tanımlı olsaydı her fonksiyon bitiminde değişkenler 
Garbage Collector (GC) tarafından silinecekti dolayısıyla başlangıç değerinden devam edecekti her seferinde
Yani 5 değerini alacaktı.*/

// (() =>{
//     inc=()=>{
//      let number=5;
//         console.log(++number);  /* çıktı 6 6 6 olur */ 
//     }
//     inc();
//     inc();
//     inc();
// }) ();

                    // ! HOISTING

    /* let ve const tiplerinde uyumlu değil sadece var tipinde uygulanıyor.
    Let ve const kullanımı Referance Error hatası döndürür.
    Var yerine let ve const kullanımları daha iyidir. Değişkenimizi kullanıcağımız yerin üzerinde 
    tanımlarsak hiç bir sorun olmaz. Şimdi hoisting konusuna girelim. 
    Bilmemiz gereken en önemli noktalardan biri değişken tanımları bağlı olduğu scop içinde 
    yukarıda olmalı ama değer atamaları yukarı taşınmaz.  Aşağıdaki örneğe bakalım.
    */


// var name = "sahin";
// console.log(name);    //  sahin

// var surname;
// console.log(surname);  // undefined

// var age; 
// console.log(age);      
// age=23;                 // undefined

// job ="engineer"
// console.log(job);       // TODO önemli) engineer 
// var job;

/*  Javascript bu üsteki örnekte kodu şöyle görüyor 
    var job;
    job="engineer"
    console.log(job);
    Yani değişken tanımlamasını yukarı almış oldu. Ama değer atamasının yeri değişmez. 
İşte buna hoisting deniyor.Değişken tanımlamasını yukarı almak diyebiliriz.
*/


// var x=5; 
// function calc() {
//     console.log(x);             
//     var x=10;
//     console.log(x);
// }
// calc();
// console.log(x);

/* Çıktı: undefined 10 5 olur.*/

/* Yukarıdaki örnekte beklediğimiz şey şu, aslında aşağıdakine dönüşüyor. Var değişkenleri 
fonksiyon başında tanımlanır.İç içe fonksiyonlar hariç tabi

var x=5;
function calc(){
    var x;
    console.log(x);
    x=10;
    console.log(x);
}
calc();
console.log(x);
Çıktı :
undefined 
10
5

*/ 

// function challenge (){
//     console.log(y);
//     console.log(x);
//     var x=10;
//     var y=20;
//     console.log(y);
//     console.log(x);
//     var x=15;
//     console.log(y);
//     console.log(x);
//     var y=95;
//     console.log(y);
// }

// challenge();

/* yukarıda ki örnek şu halde olur arka planda;
function challenge (){
    var x;
    var y;
    var x;
    var y;
    console.log(y);
    console.log(x);
    x=10;
    y=20;
    console.log(y);
    console.log(x);
    x=15;
    console.log(y);
    console.log(x);
    y=95;
    console.log(y);
}

Çıktı: undefined undefined 20 10 20 15 95

*/


                    // ! IIFE (Immediately Invoked Function Expressions)

/* Anında çağrılan fonksiyon anlamına gelir.Yani bir fonksiyon tanımladık diyelim, 
tanımladığımız fonksiyonu çağırmanıza gerek kalmadan, tanımlandığı yerde anında çalışan fonksiyonlardır.*/

function mesaj(){
    console.log("Bu bir mesajdır")
}
mesaj();

(function () {
    console.log("bu bir mesajdir")
})();

// Yukarıdakilerin ikiside aynı sonucu döndürür.
/* IIFE  içerisindeki değişkenler dış dünya tarafından görülmez.
- IIFE’ler bir defaya mahsus çalışması gereken kodların javascript’in 
global değişken listesine hiç bulaşmadan, kendi bloğunda kodlarımızın çalışması içindir.
Böylelikle yerel değişkenler kullanıldığı için kod optimize olur
ve bir miktar da olsa performans artışı gözlenir.*/

// Arrow functionlarda da kullanılır

((name,job) => {
    let age=26;
    console.log(name, job, age)
})("sahin", "engineer");

// Return değerler alabilir.

let takim ="Fenerbahçe"
var mesaj=((value)=> {
    return `sahin ${value}'yi tutuyor`
})(takim);
console.log(mesaj);