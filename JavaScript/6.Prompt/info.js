let greeting=document.querySelector("#greeting");

let name = prompt("Adınızı Giriniz !!!","örnek");


greeting.innerHTML=`${greeting.innerHTML} <span style="color:red">${name}</span>`

/* prompt ile kullanıcıdan bilgi alabiliyoruz. Browser' ın yukarısından alertde çıkan kutunun
aynısından çıkıyor ve bir şeyler girmemizi sağlıyor. Girilen bilgi atadığımız değişkene (name) gönderiliyor.
Böylece o değişkeni istediğimiz yerder kullanabiliriz.
örnek diye belirttiğimiz yer default olarak içinde gönderiyoruz placeholder gibi düşünün. */