// prompt('veuillez vous taire');
let myImage = document.querySelector('img');
myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/robot1.jpeg'){
        myImage.setAttribute('src','images/robot3.jpeg')
    } else {
        myImage.setAttribute('src', 'images/robot1.jpeg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}
if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.addEventListener('click', function() {
  setUserName();
});


  
// let myVariable;
// myVariable = 'Bob is lache';
// alert(myVariable) ;

// document.querySelector('html').addEventListener('click', function() {
//     let a=10; let b=60;

//     alert( a+b);
// });
// function multiply(num1,num2) {
//     let result = num1 * num2;
//     return result;
//   }