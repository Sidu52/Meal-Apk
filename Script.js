const image = document.querySelectorAll('.img');
const fruite = document.querySelectorAll('.box');
const Detail = document.querySelectorAll('.button');
const favbtn = document.querySelector('.headericon');
const favourite = document.querySelectorAll('.favourite');


favbtn.onclick = () => {
    var x = document.querySelector(".sidebar");
    if (x.style.width == '35%') {
        x.style.width = "0";
    } else {
        x.style.width = '35%';
    }
}
