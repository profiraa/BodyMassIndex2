let bodyweightInput = document.getElementById('bodyweight');
let heightInput = document.getElementById('height');
const btn = document.getElementById ('click');
let result = document.getElementById('output');

btn.addEventListener('click', calculateBMI);
function calculateBMI(){
    let x = Number(bodyweightInput.value);
    let y = Number(heightInput.value);
    console.log(x);
    let text = '';
    let color = '';
    let bmiValue = x/(y*y); 
    if(bmiValue < 18.5){
        text = "underweight";
        color = "blue";
} 
    else if (bmiValue >= 18.5 && bmiValue < 25) {
    text = "normal";
    color = "green";
} 
    else if (bmiValue >= 25 && bmiValue < 30) {
    text = 'overweight';
    color = 'orange';
} 
    else if (bmiValue >= 30 && bmiValue <35) {
    text = 'obese';
    color = 'red';
}
    else if (bmiValue >= 35) {
    text = 'extremely obese or morbidly obese';
    color = 'brown';
}
else if (bmiValue = 0) {
    text = 'not watchful';
    color = 'white';
}

result.innerHTML = 'Your BMI is ' + bmiValue.toFixed(1) + '. ' + 'You are ' + text + '.';
result.style.color = color;
}
