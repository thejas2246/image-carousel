const imageArray = [];

imageArray.push("./assets/images/squirril.jpg");
imageArray.push("./assets/images/sparrow.jpg");
imageArray.push("./assets/images/deer.jpg");
imageArray.push("./assets/images/dog.jpg");
imageArray.push("./assets/images/chicken.jpg");
imageArray.push("./assets/images/dogs.jpg");
imageArray.push("./assets/images/bird.jpg");
imageArray.push("./assets/images/horse.jpg");

let imageCount = 0;
const image = document.querySelector(".image");
const previousImage = document.querySelector(".previous-image");
const nextImage = document.querySelector(".next-image");

function showImageDots(imageCount) {
    const dotContainer = document.querySelector(".dot-container");
    dotContainer.textContent = "";
    for (let i = 0; i < imageArray.length; i++) {
        const dots = document.createElement("div");
        dots.setAttribute("class", "image-dots");
        dotContainer.appendChild(dots);
        if (imageCount === i) {
            dots.classList.add("active-image");
        }
    }
}

function changeImage() {
    if (imageCount >= imageArray.length) {
        imageCount = 0;
    }
    if (imageCount === imageArray.length - 1) {
        nextImage.src = imageArray[0];
    } else {
        nextImage.src = imageArray[imageCount + 1];
    }
    if (imageCount === 0) {
        previousImage.src = imageArray[imageArray.length - 1];
    } else {
        previousImage.src = imageArray[imageCount - 1];
    }
    image.src = imageArray[imageCount];

    showImageDots(imageCount);
    imageCount++;
}

setInterval(changeImage, 5000);

document.addEventListener("DOMContentLoaded", changeImage);
