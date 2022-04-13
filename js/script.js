alert("Assalomu aleykum");
var firstName = prompt('Ismingizni kiriting: ');

var section = document.createElement("p");
section.textContent = 'Sizning ismingiz: ' + firstName;

document.body.appendChild(section);


document.querySelector("p").style.fontSize = "50px";
document.querySelector("p").style.textAlign = "center";
document.querySelector("p").style.color = "coral";
document.querySelector("p").style.fontWeight = "bold";