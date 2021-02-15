let bodyweightInput = document.getElementById('bodyweight');
let heightInput = document.getElementById('height');
const btn = document.getElementById ('click');
let result = document.getElementById('output');

btn.addEventListener('click', calculateBMI);
function calculateBMI(){
    let x = Number(bodyweightInput.value);
    let y = Number(heightInput.value);
    let text = '';
    let color = '';
    let bmiValue = x/(y * y); 
    if(bmiValue < 18.5){
        text = "underweight";
        color = "blue";
} else if (bmiValue <= 18.5 && bmiValue < 25){
    text = "normal";
    color = "green";
} else if (bmiValue >= 25 && bmiValue < 30) {
    text = 'overweight';
    color = 'orange';
} else if (bmiValue >= 30) {
    text = 'obese';
    color = 'red';
}
result.innerHTML = 'You are ' + text;
result.style.color = color;
}
