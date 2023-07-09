var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = 'dice' + randomNumber + '.png';
var imageSource = './images/' + randomImage;
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', imageSource);

var randomNumber1 = Math.floor(Math.random()* 6) + 1;
var randomDice = 'dice' + randomNumber1 + '.png';// dice1.png
var randomImageSource = './images/' + randomDice;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src',randomImageSource);

if(randomNumber>randomNumber1){
    document.querySelector('h1').innerHTML="Player 1 Wins"
}else if(randomNumber1>randomNumber){
    document.querySelector('h1').innerHTML="Player 2 Wins"
}else{
    document.querySelector('h1').innerHTML="It is a draw!"
}