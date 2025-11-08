const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const calcButton = document.getElementById("calcButton");
const outputContainer = document.getElementById("output");

calcButton.addEventListener('click', handleClick);


function handleClick(){
    let reizinasana = number1.value * number2.value;
    let dalisana = number1.value / number2.value
    outputContainer.innerHTML = `reizināšana: ${reizinasana} dališana: ${dalisana}`;
}