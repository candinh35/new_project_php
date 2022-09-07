var images = [
    "./../img/banner/banner_2.jpg",
    "./../img/banner/banner_4.jpg"
];
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    console.log(slider)
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.style.backgroundImage = `url(${images[num]})`

}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.style.backgroundImage = `url(${images[num]})`
}