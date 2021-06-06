window.onload = imgLoad;

var Max = 6; // Кол-во изображений в папке

function imgLoad() { // Загрузка изображений из папки в верстку
    for (var j = 0; j < Max; j++) {
        img = document.createElement("img");
        img.src = "img/p" + j + ".jpg";
        img.style.display = "none";
        gallery.appendChild(img);
    }

    var images = document.querySelectorAll("img");
    var backButton = document.getElementById("backButton");
    var forwardButton = document.getElementById("forwardButton");
    //var i = parseInt((images.length / 2));// среднее изображение

    var i = 0;

    allImg = document.getElementById("length");
    allImg.innerHTML = images.length - 1;//счетчик всех изображений

    lifeImg = document.getElementById("element");
    lifeImg.innerHTML = i; // текущее изображение

    images[i].style.display = "block";
    backButton.style.visibility = "hidden";

    backButton.onclick = function () {
        images[i].style.display = "none";
        i--;
        lifeImg.innerHTML = i;
        if (i <= 5) {
            forwardButton.style.visibility = "visible";
        }
        if (i == 0) {
            backButton.style.visibility = "hidden";
        }
        images[i].style.display = "block";
    }

    forwardButton.onclick = function () {
        images[i].style.display = "none";
        i++;
        lifeImg.innerHTML = i;
        if (i >= 1) {
            backButton.style.visibility = "visible";
        }
        if (i == images.length - 1) {
            forwardButton.style.visibility = "hidden";
        }
        images[i].style.display = "block";
    }
}