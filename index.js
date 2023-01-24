/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
/* 
x = input value
y1, y2 = results

(x) meters = (y1) feet | (x) feet = (y2) meters
(x) liters = (y1) gallons | (x) gallons = (y2) liters
(x) kilos = (y1) pounds | (x) pounds = (y2) kilos

*/
const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let inputArr = []




buttonEl.addEventListener("click", function(){
     
     inputVal()
     
        const lengthMeter = inputArr[0] * 3.281
        const lengthFeet = inputArr[0] * 0.305
     
            lengthEl.textContent = `${inputArr[0]} meter(s) = ${lengthMeter} feet | ${inputArr[0]} feet = ${lengthFeet} meter(s)`
        
        const volumeLiters = inputArr[0] * 0.264
        const volumeGallons = inputArr[0] * 3.785
            
            volumeEl.textContent = `${inputArr[0]} liter(s) = ${volumeLiters} gallon(s) | ${inputArr[0]} gallon(s) = ${volumeGallons} liter(s)`
            
        const massKilograms = inputArr[0] * 2.205
        const massPounds = inputArr[0] * 0.454
        
            massEl.textContent = `${inputArr[0]} kilogram(s) = ${massKilograms} pound(s) | ${inputArr[0]} pound(s) = ${massPounds} kilogram(s)`
    
  
})


 function inputVal(){
    inputArr.pop()
    inputArr.push(inputEl.value)
    
    const inputIndex0 = inputArr[0]
    //lengthEl.textContent = inputIndex0
    //volumeEl.textContent = inputIndex0
    //massEl.textContent = inputIndex0

}


