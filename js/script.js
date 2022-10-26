const arrImg = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let album = document.querySelector(".container_img");
let btnTop = document.querySelector(".btn-top");
let btnbottom = document.querySelector(".btn-bottom");

for (let i = 0; i < arrImg.length; i++) {
    let eleImg = document.createElement("img");
    eleImg.src = arrImg[i];
    eleImg.classList.add("foto");
    album.append(eleImg);
    
}