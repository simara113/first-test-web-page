//image change function
let myimg = document.querySelector('img');
myimg.onclick = function() {
    let mysrc = myimg.getAttribute('src');
    if(mysrc === 'images/test-image2.jpg') {
        myimg.setAttribute('src' , 'images/test-image3.jpg')
    } else {
        myimg.setAttribute('src' , 'images/test-image2.jpg')
    }
}

//declaring variable
let myvar;
myvar = 'Andrei';

//function multiply
function multiply(n1 , n2) {
    let result = n1 *n2;
    return result;
}
/*
document.querySelector('html').onclick = function() {
    alert('Ouch!! Stop poking me, bastard!');
}
*/
let mybut = document.querySelector('button');
let myhead = document.querySelector('h1');

function setusername() {
    let myname = prompt('Enter your name:');
    localStorage.setItem('name' , myname);
    myhead.textContent = 'Paragliding is cool, ' + myname;

}
if(!localStorage.getItem('name')) {
    setusername();
} else {
    let storedname = localStorage.getItem('name');
    myhead.textContent = 'Paragliding is cool, ' + storedname;
}
mybut.onclick = function() {
    setusername();
}
