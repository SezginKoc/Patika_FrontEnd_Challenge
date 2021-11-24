let email= "hakanyalcinkaya@gmail.com"
let firstName="hakan"
let lastName="YALCINKAYA"

            // ! string karakter sayisi 
console.log(email.length)


            // ! İlk Karakteri Bulmak 
console.log(firstName[4]) // çıktı: n
/*veya*/
console.log(firstName.charAt(0))   // çıktı: h

            //! Belirtilen Index Numarasındaki Unicode değerini verir.
console.log(firstName.charCodeAt(1)); // Çıktı: 97 -> bu çıktı "a" harfinin unicode değeri


            // ! büyük harf küçük harf
firstName=firstName.toUpperCase()
console.log(firstName)

lastName=lastName.toLowerCase()
console.log(lastName)

            //! Metin İçinde Bilgiyi Aramak -> indexOf
let ad="Oğuz Duran"
console.log("AD: ",ad.indexOf("Du")) // Çıktı: 5

            //! Metin İçinde Bilgiyi Aramak -> lastIndexOf
        // Aranan kelime birden fazla geçiyorsa en son eşleşeni getirir.

console.log("AD: ",ad.lastIndexOf("u")) // Çıktı:6


            //! String İçinde İstediğimiz Bilgiyi Aramak ve Yerini Bulmak
console.log(email.search("@")) // @ işaretinin index numarasını getirir.
console.log(email[15])          // 15 numaralı indexde ki karakteri getirir.

console.log(email.search("haahah")) // olmayan bir şey arattığında -1 döndürür.

            //! Belli bir yere kadar alma -> slice 
console.log(email.slice(0,11))  // 0'dan 11' e kadar olanları al.
console.log(email.slice(15)) // 15'den sonrasını al demek. çıktı:@gmail.com olur.


let DOMAIN=email.slice(email.search("@")+1);
console.log(DOMAIN);                 // çktı: @gmail.com -> Bu şekilde sadece domain adresini alabiliriz.

console.log(DOMAIN.indexOf("."));   // çıktı: 5 -> bu şekilde "." nın kaçıncı indexde olduğu bulunur

console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))) // çıktı: gmail. -> böyle sadece gmail kısmını almış olduk

            // ! Bilgiyi Değiştir
email=email.replace("gmail.com", "kodluyoruz.org")
console.log(email)

            //! Metin Birleştirme - Concat
        //Elimizdeki iki string ifadeyi birleştirmemizi sağlar.
let lecture="Bilgisayar";
let lectureClass="203";
console.log(lecture.concat(", Sınıf:", lectureClass))

            // ! İstediğin Bilgi Var mı
console.log(email.includes("@"))  // Cıktı: true ->  includes boolean döndürür.
console.log(email.includes("blabal"))  // Çıktı: False 

            // ! İstediğim Bilgi ile Başladı mı Bitti mi -> startsWith, endWith
console.log(
    email.endsWith("kodluyoruz.org")  // Çıktı: True -> boolean döndürür.
)

console.log(email.startsWith("sezgin"))  // Çıktı:false

            // ! İlk Harfini Büyük Yapmak

firstName="FIRST"
lastName="LAST"

let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} 
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)

            // ! Split ile Metin Diziye Çevrilir

let isim="Oğuz, Kamer"
let isimler=isim.split(",")
console.log(isimler)
