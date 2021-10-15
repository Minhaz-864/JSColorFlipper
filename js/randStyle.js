const hexList = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btnRand = document.getElementById("btn1");
const color = document.querySelector(".color");
let randomNumber;
var colorPallete = '#';

btnRand.addEventListener("click",function(){
    console.log("Random Generation");
    color.textContent = colorPallete;
    for (let i = 0; i < 6; i++){
    randomNumber = Math.floor(Math.random()*hexList.length);
    colorPallete +=  hexList[randomNumber];
    }
    console.log(colorPallete);
    document.body.style.backgroundColor = colorPallete;
    color.textContent = colorPallete;
    colorPallete = '#';
});