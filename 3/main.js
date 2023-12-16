const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

// Скрипт для раскрытия блока portfolio

//Раскрыть лабу
const showButton = document.getElementById('showButton');
const image = document.getElementById('image');

showButton.addEventListener('click', function() {
    if (image.style.display === 'none') { 
        image.style.display = 'block' 
    } else {
        image.style.display = 'none'
    }
});

//раскрыть info 

function toggleVisibility() {
    var myDiv = document.getElementById("info");
    // Переключаем класс, чтобы скрыть или показать div
    info.classList.toggle("hidden");
  }