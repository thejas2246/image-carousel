const imageArray = [];

imageArray.push("./assets/images/squirril.jpg");
imageArray.push("./assets/images/sparrow.jpg");
imageArray.push("./assets/images/deer.jpg");

let imageCount = 0;
const image = document.querySelector(".image");

function changeImage() {
    if (imageCount >= 3) {
        imageCount = 0;
    }
    image.src = imageArray[imageCount];
    imageCount++;
}

setInterval(changeImage, 5000);

document.addEventListener("DOMContentLoaded", changeImage);
