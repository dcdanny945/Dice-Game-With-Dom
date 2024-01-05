const randomNumber = Math.floor(Math.random()*6)+1; // 1-6

const randomDiceImage ="dice"+randomNumber+".png"; //dice1.png- dice.6-png;

const randomDiceImageSource = "images/"+randomDiceImage; // images/dice1.png-dice.6png;

const image1 = document.querySelectorAll("img")[0]; // select class image1 using [0]
image1.setAttribute("src", randomDiceImageSource);


const randomNumber2 = Math.floor(Math.random()*6)+1;
const randomDiceImagesource2 ="images/"+"dice" +randomNumber2+".png";
const swapImage2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImagesource2);


if (randomNumber2 > randomNumber){
    document.querySelector("h1").textContent = "Player2 Won🚩";

}
else if (randomNumber>randomNumber2){
        document.querySelector("h1").innerHTML = "🚩Player1 Won";
    }
else{
    document.querySelector("h1").textContent = "Roll Again 🎲";
}