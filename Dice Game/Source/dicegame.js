var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "Yes you can go for it!!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerHTML = "No, Don't go for it...";
} else {
  document.querySelector("h2").innerHTML = "It's upto you!!";
}
