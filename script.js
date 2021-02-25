import {translateMorseToEnglish, translateEnglishToMorse, outputArr, validCharacterEng, validCharacterMorse} from "./translator.js"

let inputValue;
let outputValue = document.getElementById("output__text");

//--------------------------------CLEAR-------------------------------------------
document.getElementById("clear__button").addEventListener("click", () => {
    document.getElementById("input").value = ""
    document.getElementById("output__text").innerHTML = ""

})

//-----------------------------TRANSLATE BUTTON------------------------------------
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
        outputValue.innerHTML = outputArr.join(" ");
    } else {
        outputValue.innerHTML = "Not a valid character"
    }
});

//-----------------------------SWAP-----------------------------------------------
const soundEngToLeft = () => {
    let soundEng = document.getElementById("sound");
    let soundMorse = document.getElementById("sound__morse");

    soundEng.classList.remove("sound_right");
    soundEng.classList.add("sound_left");
    soundMorse.classList.remove("sound_left");
    soundMorse.classList.add("sound_right");
}

const soundEngToRight = () => {
    let soundEng = document.getElementById("sound");
    let soundMorse = document.getElementById("sound__morse");

    soundEng.classList.remove("sound_left");
    soundEng.classList.add("sound_right");
    soundMorse.classList.remove("sound_right");
    soundMorse.classList.add("sound_left");
}

document.getElementById("swap").addEventListener("click", () => {
    let firstLang = document.getElementById("firstLang");
    let secondLang = document.getElementById("secondLang");
    
    if (firstLang.innerText == "English") {
        firstLang.innerHTML = "Morse code";
        secondLang.innerHTML = "English";
        soundEngToRight();
        
    } else {
        firstLang.innerHTML = "English";
        secondLang.innerHTML = "Morse code";
        soundEngToLeft();
    }
    
})

//--------------------------------TEXT TO SPEECH----------------------------
document.getElementById("sound").addEventListener("click", () => {
    if ('speechSynthesis' in window) {
        console.log("Speech Synthesis supported")
    } else{
         alert("Sorry, your browser doesn't support text to speech!");
    }
    
    let secondLang = document.getElementById("secondLang").innerText;
    let msg = new SpeechSynthesisUtterance();

    if (secondLang == "English") {
        msg.text = document.getElementById("output").innerText;
        window.speechSynthesis.speak(msg);
    } else {
        msg.text = document.getElementById("input").value;
        window.speechSynthesis.speak(msg);
    }  
    
})

//----------------------------------MORSE TO SOUND--------------------------
const morseAudio = (message) => {
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    let ctx = new AudioContext();
    let dot = 1.2 / 15;
    let t = ctx.currentTime;

    let oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    let gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);

    message.split("").forEach((letter) => {
        switch(letter) {
            case ".":
                gainNode.gain.setValueAtTime(1, t);
                t += dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case "-":
                gainNode.gain.setValueAtTime(1, t);
                t += 3 * dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case " ":
                t += 7 * dot;
                break;
        }
    })

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();

    return false;
}


document.getElementById("sound__morse").addEventListener("click", () => {
    let secondLang = document.getElementById("secondLang");
    let msg;

    if (secondLang.innerText == "English"){
        msg = document.getElementById("input").value;
        morseAudio(msg);
    } else {
        msg = document.getElementById("output").innerText;
        morseAudio(msg);
    }
});

