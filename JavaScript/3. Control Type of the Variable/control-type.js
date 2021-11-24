                // TODO  string bilgileri int ve floata dönüştürmek


let number1="11";
number1=Number(number1) // number1=parseInt(number1) de olabilir
console.log("number1: ", number1, typeof(number1))


let number2="11px";
number2=parseInt(number2) // number2=Number(number2) olamaz Nan hatası verir. Çünkü veri "11px"
console.log("number2: ", number2, typeof(number2))

let number3="px11px"; // ancak verinin başına text koyarsak px gibi o zaman parseInt sayı kısmını alamaz Nan hatası verir.
number3=parseInt(number3)  
console.log("number3: ", number3, typeof(number3))

let number4="11.4px";
number4=parseFloat(number4);
console.log("number4: ", number4, typeof(number4))


                //TODO number veri tipinden stringe dönüştürmek
let number5=55;
number5=number5.toString();
console.log(number5, typeof(number5))



let x = 10 + "20";
let y = "20" + 10;
let k = "20" * 10;
let z = 10 * "20";
document.write(x)
document.write("<br>")
document.write(y);
document.write("<br>")
document.write(z);
document.write("<br>")
document.write(k);

// let m;
// m=Math.random();
// const randomBoolean = m >=0.5;
// console.log("m:", m)
// console.log(randomBoolean);

// const randomBoolean= () => Math.random() >=0.5;
// console.log(randomBoolean());

// const Browser =() => document.hidden;
// Browser ();

// const isEven = num => num %2 ===0;
// console.log(isEven(5));
// console.log(isEven(4));

// const goToTop=() => window.scrollTo(0,0);
// goToTop();

// const average = (...args) => args.reduce((a,b)=> a + b) / args.length;
// console.log(average(1,2,3,4));


var a;                       // baktığımızda değer hem null hem undefined olarak algılanıp blok çalışıyor.
if(a==null && a==undefined){
    console.log(a);                  // Çıktı:  undefined 
    console.log(4);
}


var a;                    // a tip olarak null ile aynı değil ama a tip olarak undefined
if(a===null && a===undefined){
    // console.log(a);      // çıktı yok veya ( || ) operatörü olsaydı çıktı olurdu.
    console.log(14);
}

a =false;                   // a burada ne null de undefined değer olarak o yüzden blok çalışmaz.
if (a==null || a==undefined){
    console.log("YAZ Bakalım")
}
console.log(true + false);

let g = "hello" && 123;
console.log("g:",g);

console.log("number: ", Number("123"))
console.log(+"123")
console.log(123!="456")
console.log(4>"5")
console.log(5/null)
console.log(true | 0)