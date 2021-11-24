//! VAR 

// var  weLove= "Kodluyoruz";
// if(2>1) {
//   var weLove = "Bootcamp";
//   console.log(weLove)
// }
// console.log(weLove) 

// function scope(){
//     var functionScopeDegisken = "Bu degisken function scope da tanimlidir";
//     if(true){
//       var blocktaTanimliDegisken = "Bu degisken blockta tanimlidir"
//       functionScopeDegisken = "Function scope da ki tanımlı degiskenlere o fonksiyonun blocklarından erişilebilir."
//     }
//     console.log(blocktaTanimliDegisken);
//     console.log(functionScopeDegisken);
//   }
//   scope();
//   console.log(functionScopeDegisken);
//   console.log(blocktaTanimliDegisken);

//! LET

// let serverName="api.sezgin.org";
// let serverNumber=99;
// let sonuc;

// serverNumber += 1;
// sonuc = "sonuc => " + serverNumber;


// serverName +=  " => sk nin yeni api versiyonudur. "


// console.log(serverName);
// console.log(serverNumber);
// console.log(sonuc);

// let okulNumarasi =  414;
// if(true){
// //  let okulNumarasi =  245;
//     console.log("Ilk blockta ki deger: "+okulNumarasi);
// //   if(true){
// //      let okulNumarasi = 312;
// //     console.log("Ikinci blockta ki deger: "+okulNumarasi);
// //      }
// }
//  console.log("Global scopeta ki deger: "+okulNumarasi);


//! CONST

// const SERVER_PASSWORD="sfhafafai";

// const pass="AVACA"
// console.log(SERVER_PASSWORD);
// console.log(pass);


// const kullanici = {
//     isim: "Ahmet",
//    }
//    kullanici.isim = "Dila";
//    console.log(kullanici.isim);

//    const dizi = [1,2,3];
//    dizi = [1,2,3,4];

// b();
// console.log(a);

// let a = "Merhaba Dünya!"

// function b() {
// 	console.log("b fonksiyonu")
// }



// function a() {
//     var myVar = 2;
//     b();
// }
// function b() {
//     console.log(myVar);
// }
// var myVar = 1;
// a();

// function a() {
//     function b() {
//         console.log(myVar);
//     }
//     var myVar = 2;
//     b();
// }
// var myVar = 1;
// a();

// let vall =2 
// function multiplyThis(n){
//     let ret = n*vall

//     return ret
// }
// let multiplied = multiplyThis(6)

// console.log("example of scope:", multiplied);

// let val = 7
// function createAdder() {
//         function addNumbers(a, b) {
//             let ret = a + b
//             console.log(ret);
//             return ret
//     }
//     return addNumbers
//     }
// let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum)




// function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }
//  const increment = createCounter()
//     const c1 = increment()
//     const c2 = increment()
//     const c3 = increment()
//     console.log('example increment', c1, c2, c3)

// function makeFunc() {
//   var name = 'Mozilla';
//   function displayName() {
//    console.log(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();


// function numberGenerator() {
//   // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() { 
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// }

// var number = numberGenerator();
// number(); // 2

// var x = 10;
// function foo(a) {
//   var b = 20;

//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }

//   function boop(e) {
//     return e * -1;
//   }

//   return bar;
// }

// var moar = foo(5); // Closure  
// /* 
//   The function below executes the function bar which was returned 
//   when we executed the function foo in the line above. The function bar 
//   invokes boop, at which point bar gets suspended and boop gets push 
//   onto the top of the call stack (see the screenshot below)
// */
// moar(15); 

// var result = [];
 
// for (let i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }

// result[0](); // 5, expected 0
// result[1](); // 5, expected 1
// result[2](); // 5, expected 2
// result[3](); // 5, expected 3
// result[4](); // 5, expected 4


// let age=26;
// let height=174;
// birthday = ()=> {
//   let weight=65;
//   height= 176;
//   console.log(`
//     my new age  : ${++age}
//     my new height: ${ ++height}
//     my new weight: ${++weight}
  
//   `);
// }
// birthday();
// birthday();
// birthday();




// // sayacı artıran fonksiyon
// function add() {
//   let counter = 0;
//   counter += 1;
//   console.log(counter);
// }

// // Add() fonksiyonu 3 kez çağırın
// add();
// add();
// add();

// function ekle(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// var add5 = ekle(5);
// var add10 = ekle(10);

// console.log(add5(2));  // 7

// console.log(add10(2));

// function basla() {
//   var sayi = 0;
  
//   setTimeout(function(){
//     console.log(++sayi);
//       setTimeout(function(){
//       console.log(++sayi);
//         setTimeout(function(){
//           console.log(++sayi);
        
//         },100); 
//       },200); 
//   },300); 
// }
// basla();

// function basla() {
//   for(let i = 1; i<=5;i++){
//     setTimeout(function(){
//       console.log(i);
//     },i*1000); 
//   }
// }
// basla();

// function counterGenerator(){
//   let counter= 0;
//   var counterFunc=function(){
//     return console.log(counter++);
//   }
//   return counterFunc;
//   console.log(counter);
// }

// var counterG = counterGenerator()
// // console.log(counterG ());

// function customerFactory(){
//   var customerId = 0;
//   return function (){
//     console.log(customerId);
//     customerId++;
//     console.log(customerId);
//     return{
//       "customerId:" : customerId,
//       "Name:":"Tarik" + customerId,
//       "LastName" : "Gunet" + customerId
      
//     }
  
//   }
  
// }

// var customerFunc = customerFactory();

// console.dir(customerFunc());
// console.dir(customerFunc());
// console.dir(customerFunc());

// function a(){
//   function b() {
//     function c() {
//       console.log(`c function called ${x}`)
//     }
//     var x=3
//     c();
//     console.log(`b function called ${x}`)
//   }
//   var x=2
//   b();
//   console.log(`a function called ${x}`)
// }
// var x=1
// a()
// console.log(`main function called ${x}`);

function button (n){
  alert(n)
}

