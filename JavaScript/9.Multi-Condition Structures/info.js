// let userName = prompt("Kullanıcı Adınız:")
// let age = prompt("Yaşınız:")
// let info = document.querySelector("#info")
// let info2 = document.querySelector("#info2")
// if (userName && age >= 18) {
//     info.innerHTML = "Ehliyet Alabilirsiniz"
// }
// else if (userName && age < 18 && age > 0) {
//     info.innerHTML = "18 Yaşından Küçüksünüz"
// }
// else if (userName && !age) {
//     info.innerHTML = "Yaş Bilginiz Yoktur"
// }
// else if (age && !userName) {
//     if (age < 18 && age > 0) { info.innerHTML = "Yaşınınz 18'den Küçük" }
//     info2.innerHTML = "Kullanıcı Adınız Yok"
// }
// else if (!userName && !age) {
//     info.innerHTML = "Kullanıcı Adı ve Yaş Giriniz"
// }
//! SWITCH CASE

/* Program akışında switch ifadesine verilmiş değeri sağlayan case etiketine geçerek ilgili deyimleri çalıştıracaktır,
bu kontrol switch ifadesine verilmiş değerlerin tanımlanmış case etiketleri ile değer ve tip kontrolünün (===)
otomatik tip dönüşümü olmadan yapılmasıdır.*/
// TODO açıklama) hava değişkenine Gunesli verildiğinde Gunesli case çalışır break olmadığı için Bulutlu case de çalışır ve yapıdan çıkar. 


// let hava = "Gunesli";
// switch (hava) {
//     case "Yagmurlu":
//         console.log("Şemsiyeni yanına almayı unutma");
//         break;
//     case "Gunesli":
//         console.log("Hafif giyin");
//     case "Bulutlu":
//         console.log("Dışarı çık");
//         break;
//     case "Karlı":
//         console.log("Kalın giyin");
//         break;
//     case "Fırtınalı":
//         console.log("Bir süre dışarı çıkma");
//         break;
//     default:
//         console.log("Bilinmeyen hava durumu:", hava)
// }


//TODO açıklama) girilen s stringin ilk harfi eğer a,e,i,o,u dan birisi ise letter değişkeni A olsun diyoruz.
// TODO açıklama) includes true ya da false döndürür. Mesela a,e,i,o,u dan birisi includes da bahsedilene sahipse true döner.
//TODO açıklama) switch yapısında da true yazdığımız için case true olanlar işlenir.
let letter;
let s = prompt("Bir string giriniz")
switch (true) {
    case "aeiou".includes(s[0]):
        letter = "A";
        break;
    case "bcdfg".includes(s[0]):
        letter = "B";
        break;
    case "hjklm".includes(s[0]):
        letter = "C";
        break;
    case "nprstvwxyz".includes(s[0]):
        letter = "D";
        break;
}
console.log(letter);