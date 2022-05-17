
const prompt = require("prompt-sync")()

/*
how to promt user to enter input
npm install prompt-sync
*/
function convertKelvinToFarh(kelv){
    return 1.8*(kelv-273.15)+32 // this line is responsible to convert degree to celcius to falheeit
    }
// to prompt user to type kelvin degree and then convert in celcius
let input = prompt("Enter Kelvin Degree")
//const inputCelcius = prompt("Enter Celcius Degree ");

if(input>373.15){
    console.log(`Kelvin above 373.25 is invalid`) //stop user to enter invalid degree
    exit
}else{
console.log(`${Math.floor(convertKelvinToFarh(Number.parseInt(input)))} Fahrenheit degree`)
}

 

// convert to celcius from kelvin
function convertKelvinToCelcius(kel){
    return kel-273 //this line is writting equivalent to celcius
}
let toFahrneit=cel=>{
    return Math.floor((cel*1.8)+32) // this line of code is enabling to enter atmost less value below 0.6
}

//conerting celcius to newton
let celciusToNewton=cel=>{
    return Math.floor(cel*(33/100))
}
console.log(`${convertKelvinToCelcius(Number.parseInt(input))} degree celcius`)
//console.log(`newton:`,celciusToNewton(inputCelcius))
