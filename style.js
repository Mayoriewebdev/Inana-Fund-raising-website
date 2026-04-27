
const images = [
"images/inanafundtext3.png",
"images/Tesla.png",
"images/inanafundtext.png",
"images/inanafundtext2.png",
];

let index = 0;
const slider = document.getElementById("headlineSlider");

setInterval(() => {

index++;
if(index >= images.length){
index = 0;
}

slider.src = images[index];

}, 3000); // 10 seconds

