
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        result.textContent = "Your BMI is: " + bmi.toFixed(2);
    } else {
        result.textContent = "Please enter valid values!";
    }
}
