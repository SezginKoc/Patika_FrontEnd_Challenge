let veri =document.querySelector("#veri");
let ekle =document.querySelector("#ekle");
let list = document.querySelector("#list");


ekle.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerHTML=veri.value;
    list.append(li);
    veri.value="";
})