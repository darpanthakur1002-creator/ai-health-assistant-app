let waterCount = 0;

function addWater(){
    waterCount++;
    document.getElementById("water").innerText =
    waterCount + " Glasses";
}
setInterval(() => {
    document.getElementById("clock").textContent =
        new Date().toLocaleTimeString();
}, 1000);
function setMood(mood) {
    document.getElementById("moodDisplay").textContent =
        "Current Mood: " + mood;
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
const today = new Date().toLocaleDateString();
document.getElementById("date").textContent = today;
}