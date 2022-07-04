
const myArr=["green", "red", "rgba(133,122,200)", "#f15025"];



const btn = document.getElementById("btn");
const colortext = document.querySelector(".colortext");


btn.addEventListener("click",function () {

    const randomNumber = getRandomNumber();
    const main=document.querySelector('main')
    main.style.backgroundColor = myArr[randomNumber];
    colortext.textContent = myArr[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*myArr.length);
}   