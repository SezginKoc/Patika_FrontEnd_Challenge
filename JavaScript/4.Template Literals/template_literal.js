let username=  "hakan"
const DOMAIN ="kodluyoruz.org"
let email = username + "@" + DOMAIN;


                //! Template Literal Kullanmadan

// console.log("Merhaba ", username, " sitemize hoşgeldin, mail adresin", email)

                //! Template Literal Kullanarak


    
let info= `
Merhaba ${username} sitemize hoşgeldin
mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}
borcunuz:${(2+3)*10}
günün saat bilgisi: ${new Date().getHours()}

kisa isminiz: ${username[0]}.

`
console.log(info);


/* Backtick arasında istediğimiz gibi alt satırlara geçirip yazabiliriz. ES6 ile birlikte gelmiştir.
İçerisine $ işareti ile birlikte değişkenler yazdırabiliriz(interpolasyon)
matematiksel işlemler yaptırabiliriz
fonksiyonlar çağırabliriz gibi gibi...
Normal yazımlarda alt satırlara geçişlerde hata verir. değişkenlerin yazımı biraz karışıktır.
*/