// put your event handlers in here, and they call/invoke your translator function
import {translateMorseToEnglish, translateEnglishToMorse, outputArr, validCharacterEng, validCharacterMorse} from "./translator.js"


let inputValue;
let outputValue = document.getElementById("output__text");


document.getElementById("swap").addEventListener("click", () => {
    let firstLang = document.getElementById("firstLang");
    let secondLang = document.getElementById("secondLang");

    if (firstLang.innerText == "English") {
        firstLang.innerHTML = "Morse code";
        secondLang.innerHTML = "English"
    } else {
        firstLang.innerHTML = "English";
        secondLang.innerHTML = "Morse code";
    }
    
})

document.getElementById("clear__button").addEventListener("click", () => {
    document.getElementById("input").value = ""
    document.getElementById("output__text").innerHTML = ""

})


document.getElementById("translate__button").addEventListener("click", () => {
    
    let inputString = document.getElementById("input").value;
    firstLang = document.getElementById("firstLang").innerText;

    if (firstLang == "Morse code" && validCharacterMorse(inputString)){
        console.log("I'm about to translate from MORSE to ENG!")
        inputValue = inputString.toLowerCase().split(" ");
        translateMorseToEnglish(inputValue);
        outputValue.innerHTML = outputArr.join("");

    } else if (firstLang == "English" && validCharacterEng(inputString)){
        console.log("I'm about to translate from ENG to MORSE!")
        inputValue = inputString.toLowerCase().split("");
        translateEnglishToMorse(inputValue);
        outputValue.innerHTML = outputArr.join("\xa0");
    } else {
        outputValue.innerHTML = "Not a valid character"
    }
});