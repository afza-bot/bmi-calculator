const bmiText = document.getElementById('bmi');
const descText = document.getElementById('desc');
const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("please enter a valid and height");
        return;
    }

    const heightInMeters = height / 100; // cm -> m
    const bmi = weight / Math.pow(heightInMeters, 2);

    bmiText.textContent = bmi.toFixed(2);
}
