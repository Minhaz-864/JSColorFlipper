const colorArray = ['violet', 'indigo', 'blue' ,'green' ,'yellow' ,'orange' ,'red','white','black','grey','purple','pink','lime','musterd'];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");



btn.addEventListener("click",function(){
    console.log(document.body);
    const randomNumber = Math.floor(Math.random()*colorArray.length);
    document.body.style.backgroundColor = colorArray[randomNumber];
    color.textContent = colorArray[randomNumber];
});

