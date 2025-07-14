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

let myTimer = setInterval(changeImage, 5000);

function leftArrow() {
    imageCount = imageCount - 2;
    if (imageCount < 0) {
        imageCount =
            ((imageArray.length - 1 + imageCount) % (imageArray.length - 1)) +
            1;
    }
    changeImage();
    resetTimer();
}

function rightArrow() {
    imageCount = imageCount % imageArray.length;
    changeImage();
    resetTimer();
}

function goToImage(event) {
    let val = event.target.getAttribute("data-index");
    imageCount = Number(val);
    changeImage();
    resetTimer();
}

function showImageDots(imageCount) {
    const dotContainer = document.querySelector(".dot-container");
    dotContainer.textContent = "";
    for (let i = 0; i < imageArray.length; i++) {
        const dots = document.createElement("div");
        dots.setAttribute("class", "image-dots");
        dots.setAttribute("data-index", i);
        dots.addEventListener("click", goToImage);
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
function resetTimer() {
    clearInterval(myTimer);
    myTimer = setInterval(changeImage, 5000);
}

document.addEventListener("DOMContentLoaded", changeImage);
const leftArrowIcon = document.querySelector(".chevron-left-icon");
const rightArrowIcon = document.querySelector(".chevron-right-icon");

leftArrowIcon.addEventListener("click", leftArrow);
rightArrowIcon.addEventListener("click", rightArrow);
