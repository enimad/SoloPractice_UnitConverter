/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

1 feet = 0.305 meter
1 gallon = 3.785 liter
1 pound = 0.454 kilogram
*/

const convertBtn = document.getElementById("convert-Btn")

// SECTIONS
const inputEl = document.getElementById("input-el")
const lengthValue = document.getElementById("length-value")
const volumeValue = document.getElementById("volume-value")
const massValue = document.getElementById("mass-value")

// FUNCTIONS
convertBtn.addEventListener("click", function(){
    // VALUE1 - VALUE2
    const feetValue = (inputEl.value * 3.281).toFixed(3)
    const meterValue = (inputEl.value * 0.305).toFixed(3)
    const gallonValue = (inputEl.value * 0.264).toFixed(3)
    const literValue = (inputEl.value * 3.785).toFixed(3)
    const kiloValue = (inputEl.value * 2.204).toFixed(3)
    const poundValue = (inputEl.value * 0.454).toFixed(3)
    
    convert(lengthValue, feetValue, meterValue, "meters", "feet")
    convert(volumeValue, gallonValue, literValue, "liters", "gallons")
    convert(massValue, kiloValue, poundValue, "kilos", "pounds")
})

function convert(section, value1, value2, unit1, unit2) {
        section.innerHTML = `${inputEl.value} ${unit1} = ${value1} ${unit2} | ${inputEl.value} ${unit2} = ${value2} ${unit1}`
}
