const arrImg = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let album = document.querySelector(".container_img");
let btnTop = document.querySelector(".btn-top");
let btnBottom = document.querySelector(".btn-bottom");

for (let i = 0; i < arrImg.length; i++) {
    let eleImg = document.createElement("img");
    eleImg.src = arrImg[i];
    eleImg.classList.add("foto");
    album.append(eleImg);
    if (i === 0) {
        eleImg.classList.add("next");
    }
}


let listAlbum = document.querySelectorAll("img");
let nextIndex = 0;


btnBottom.addEventListener("click", function () {
   
    
    listAlbum[nextIndex].classList.remove("next");
    if (nextIndex === 4) {
        nextIndex = -1
     }
    nextIndex++;

    listAlbum[nextIndex].classList.add("next");
    btnTop.classList.remove("hidden");
    // if (nextIndex === listAlbum.length -1 ) {
    //     btnBottom.classList.add("hidden");
       
    // } 
   
});

btnTop.addEventListener("click", function () {

    listAlbum[nextIndex].classList.remove("next")
    if (nextIndex === 0) {
        nextIndex = 5
     }
    nextIndex--;

    listAlbum[nextIndex].classList.add("next");
    btnBottom.classList.remove("hidden");
    // if (nextIndex === listAlbum.length -1 ) {
    //     btnBottom.classList.add("hidden");
       
    // };

})