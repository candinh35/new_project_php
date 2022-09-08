var banner = [
    "./../img/banner/banner_1.jpg",
    "./../img/banner/banner_2.jpg"
];
var sofaImg = [
    "./../img/sofa/sofa1.jpg",
    "./../img/sofa/sofa2.jpg",
    "./../img/sofa/sofa3.jpg",
    "./../img/sofa/sofa4.jpg",
    "./../img/sofa/sofa5.jpg",
    "./../img/sofa/sofa6.jpg",
    "./../img/sofa/sofa7.jpg",
    "./../img/sofa/sofa8.jpg",
]

var tiviImg = [
    "./../img/ke_tivi/tivi1.jpg",
    "./../img/ke_tivi/tivi2.jpg",
    "./../img/ke_tivi/tivi3.jpg",
    "./../img/ke_tivi/tivi.jpg",
    "./../img/ke_tivi/tivi5.jpg",
    "./../img/ke_tivi/tivi6.jpg",
]

var tableImg = [
    "./../img/table/table1.jpg",
    "./../img/table/table2.jpg",
    "./../img/table/table3.jpg",
    "./../img/table/table4.jpg",
    "./../img/table/table5.jpg",
    "./../img/table/table6.jpg",
    "./../img/table/table7.jpg",
    "./../img/table/table8.jpg",
]
var table = document.querySelectorAll('.product_table');
var sofa = document.querySelectorAll('.product_sofa');
var tivi = document.querySelectorAll('.product_tivi');

var c = 0;
while (c < tableImg.length && c < table.length) {
    table[c].style.backgroundImage = `url(${tableImg[c]})`;

    c++
}

var b = 0;
while (b < tiviImg.length && b < tivi.length) {
    tivi[b].style.backgroundImage = `url(${tiviImg[b]})`;

    b++
}
var i = 0;
while (i < sofaImg.length && i < sofa.length) {
    sofa[i].style.backgroundImage = `url(${sofaImg[i]})`;

    i++
}
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= banner.length) {
        num = 0;
    }
    slider.style.backgroundImage = `url(${banner[num]})`

}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = banner.length - 1;
    }
    slider.style.backgroundImage = `url(${banner[num]})`
}