const PI = 3.14;
const FirstNumber = document.getElementById("radiusInput");
const calcButton = document.getElementById("calcButton");
const outputContainer = document.getElementById("output");



calcButton.addEventListener('click', handleClick);


function handleClick(){
    let radius = FirstNumber.value;
    let laukums = PI * radius * radius;
    let garums = 2 * PI * radius;
    outputContainer.innerHTML = `laukums: ${laukums} R.L.: ${garums}`;
}