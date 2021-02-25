const lettersArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",".",",","?","0","1","2","3","4","5","6","7","8","9"," "];
const morseCodeArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".-.-.-","--..--","..--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----."," "];
export let outputArr;



export const translateMorseToEnglish = (input) => {
    outputArr = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] == ""){
            outputArr.push("\xa0");
            console.log("pushing space",outputArr)
        }
        for (let j = 0; j < morseCodeArr.length; j++){
            if (input[i] == morseCodeArr[j]){
               outputArr.push(lettersArr[j]);
               console.log("pushing letters",outputArr)
            }
        }
    }
    return outputArr; 
} 


export const translateEnglishToMorse = (input) => {
    outputArr = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] == " "){
            outputArr.push("\xa0");
        } 
        for (let j = 0; j < lettersArr.length; j++){
            if (input[i] === lettersArr[j]){
                outputArr.push(morseCodeArr[j]);    
            } 
        }  
    }
    return outputArr.join("\xa0 "); 
}


export const validCharacterMorse = (input) => {
    let validMorseChar = /[-. ]+/g;

    if (validMorseChar.test(input)) {
        return true;
    } else {
        return false;
    }
}

export const validCharacterEng = (input) => {
    let validEngChar = /[A-Za-z0-9?, ]+/;

    if (validEngChar.test(input)){
        return true;
    } else {
        return false;
    }
}