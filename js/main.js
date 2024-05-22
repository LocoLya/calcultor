
/* 

Для однострочного коммента "ctrl + /"
Для многострочного "shift + alt + a"

*/

'use strict';

let calcInput = document.getElementById("calcInput");
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")



calcInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    calcInput.value = evalValue()
    event.preventDefault(); 
  }
});

operators.forEach((operator) => {
  operator.onclick = () => {
    let inText = operator.innerText;

    if (inText == '=') {
      calcInput.value = evalValue();
    } else if (inText == '<') {
      calcInput.value = inText.slice(0, -1);
    } else if (inText == 'C') {
      calcInput.value = '';
    } else if (inText == 'x') {
      calcInput.value += '*';
    } else if (inText == ',') {
      calcInput.value += '.';
    } else {
      calcInput.value += operator.innerText;
    }
  }
});

numbers.forEach((number) => {
  number.onclick = () => {
    let inText = number.innerText;

    
    calcInput.value += number.innerText;
    
  }
});


// operators[0].onclick = () => {
//   calcInput.value = ''
// }

// operators[1].onclick = () => {
//   calcInput.value += operators[1].innerText;
// }

// operators[2].onclick = () => {
//   calcInput.value += operators[2].innerText;
// }








function evalValue() {
  return eval(calcInput.value);
}



// butt.onclick = function() {
//   let val = document.getElementById('elem1').value;
//   document.getElementById('str').innerHTML="Ответ: "+ eval(val);
// };