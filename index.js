/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthConverter = document.getElementById("length-converter")
let volumeConverter = document.getElementById("volume-converter")
let massConverter = document.getElementById("mass-converter")
let inputField = document.getElementById("input-field")
let convertBtn = document.getElementById("convert-btn")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseNumber = inputField.value
    //converting length
    lengthConverter.textContent = `${baseNumber} meters = ${Number(baseNumber * meterToFeet).toFixed(3)} feet | ${baseNumber} feet = ${Number(baseNumber / meterToFeet).toFixed(3)} meter`
    //converting volume
    volumeConverter.textContent = `${baseNumber} liters = ${Number(baseNumber * literToGallon).toFixed(3)} gallons | ${baseNumber} gallons = ${Number(baseNumber / literToGallon).toFixed(3)} liters`
    //converting mass
    massConverter.textContent = `${baseNumber} kilos = ${Number(baseNumber * kilogramToPound).toFixed(3)} pounds | ${baseNumber} pounds = ${Number(baseNumber / kilogramToPound).toFixed(3)} kilos`
})




//btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`
