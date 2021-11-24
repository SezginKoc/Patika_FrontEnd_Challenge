                // ! Number Veri Türü Tanımlamak //
"use strict";
let price= 100;
let tax=0.18;
let PriceTax=price*tax;
let total= price + PriceTax;

console.log("Fiyat: ", price, "KDV oranı: ", tax, "KDV Tutarı: ", PriceTax, "Toplam: ", total);


                // ! Arttırma Azaltma İşlemleri  //

let counter = 320;
counter=counter +1;
counter+=1;
counter ++;
console.log("Counter Increasing: ",counter);

 
//TODO, Prefix arttırma //
let a=0;
console.log("a değeri: ",++a);
        //TODO, Infix arttırma //
a=0;
console.log("a değeri: ",a=a+1);
        //TODO, Postfix arttırma //
a=0;
console.log("a değeri: ",a++);
console.log("a arttırılan değer: ",a);




counter --;
counter=counter-1;
counter -=1;
console.log("Counter Decreasing: ",counter);

counter *=10;
console.log("Counter Multiply: ", counter);

counter /=10;
console.log("Counter Division: ", counter);

                // ! İşlem Önceliği //
console.log((2+3)*10)

                // ! Mod Alma //

        //! Sayı Tek mi Çift mi//
console.log(3%2) // sonuc bir ise tek
console.log(14%2) // sonuc sıfır ise çift

        // ! 8 ürün alan koliye tüm ürünler sigiyor mu//

console.log("koli Kalan Ürün Orneği: ",18%8)

                // ! Üs Alma //
console.log(2*2*2*2);
console.log(2**4);

                // !Aşağı Yuvarlama //
console.log("Asagı Yuvarlama", Math.floor(1.9))

                // !Yukarı Yuvarlama //
console.log("Yukari Yuvarlama", Math.ceil(1.9))

                // !Yakına Yuvarlama //
console.log("Yakına Yuvarlama", Math.round(1.9)) /* 2'ye yuvarlar */
console.log("Yakına Yuvarlama", Math.round(1.2)) /* 1'e yuvarlar*/
console.log("Yakına Yuvarlama", Math.round(1.5)) /* 2'ye yuvarlar */ 

// let x=10;
// const obj= {x: 10, y:20};
// console.log("x" in obj);
// console.log("z" in obj);
// console.log(obj instanceof Object)
// console.log(typeof obj)
// console.log(typeof x)

// console.log(Boolean(1n));
// console.log(Boolean(-1n))
// console.log(Boolean(Infinity))
// console.log(Boolean({}))
// console.log(Boolean(Symbol()))


