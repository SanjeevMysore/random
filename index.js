//generate random image
var randomnumber= Math.floor((Math.random()*7)+1); //create random number
var randomimage='img'+randomnumber+'.jpg'; //choose the random image
var randomimagepath=randomimage; //choose random image path
var image=document.querySelector('img'); // select the img query
image.setAttribute('src', randomimagepath); //setting the path 


