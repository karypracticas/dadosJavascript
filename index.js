var randomNumber1 = Math.floor(Math.random() * 6) +1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) +1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png
//Dado izquierdo
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//Dado derecho 
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//Cambiar título dependiendo de ganador

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}