let waterCount = 0;

function addWater(){
    waterCount++;
    document.getElementById("water").innerText =
    waterCount + " Glasses";
}

function calculateBMI(){

    let weight =
    document.getElementById("weight").value;

    let height =
    document.getElementById("height").value / 100;

    let bmi =
    weight / (height * height);

    document.getElementById("result").innerHTML =
    "BMI: " + bmi.toFixed(2);
}