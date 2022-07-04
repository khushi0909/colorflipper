const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
btn.addEventListener("click",function (){
    let hexnum="#";
    for(i=0;i<6;i++)
    {
        hexnum += hex[getRandomNumber()];
    }
    
    const colortext = document.querySelector(".colortext");
    colortext.textContent = hexnum;
    const main = document.querySelector('main');
    main.style.backgroundColor = hexnum;

});
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}
