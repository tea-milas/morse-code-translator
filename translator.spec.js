import { expect } from "@jest/globals";
import {translateEnglishToMorse, translateMorseToEnglish, outputArr,validCharacterEng, validCharacterMorse} from "./translator.js";


//test lots of valid inputs
it("Should translate a to .-", () => {
    const result = translateEnglishToMorse(["a"]);
    console.log("res ", result)
    expect(result).toBe(".-")
})

it ("Should translate b to -...", () => {
    const result = translateEnglishToMorse(["b"]);
    expect(result).toBe("-...")
})

it ("Should translate b to -.-.", () => {
    const result = translateEnglishToMorse(["c"]);
    expect(result).toBe("-.-.")
})

it ("Should translate d to -..", () => {
    const result = translateEnglishToMorse(["d"]);
    expect(result).toBe("-..")
})

it ("Should translate e to .", () => {
    const result = translateEnglishToMorse(["e"]);
    expect(result).toBe(".")
})

it ("Should translate f to ..-.", () => {
    const result = translateEnglishToMorse(["f"]);
    expect(result).toBe("..-.")
})

it ("Should translate g to --.", () => {
    const result = translateEnglishToMorse(["g"]);
    expect(result).toBe("--.")
})

it ("Should translate h to ....", () => {
    const result = translateEnglishToMorse(["h"]);
    expect(result).toBe("....")
})

it ("Should translate i to ..", () => {
    const result = translateEnglishToMorse(["i"]);
    expect(result).toBe("..")
})

it ("Should translate j to .---", () => {
    const result = translateEnglishToMorse(["j"]);
    expect(result).toBe(".---")
})

it ("Should translate = to false", () => {
    const result = validCharacterEng(["="]);
    expect(result).toBe(false)
})

it ("Should translate : to false", () => {
    const result = validCharacterEng([":"]);
    expect(result).toBe(false)
})

it ("Should translate * to false", () => {
    const result = validCharacterEng(["*"]);
    expect(result).toBe(false)
})

it ("Should translate - to false", () => {
    const result = validCharacterEng(["-"]);
    expect(result).toBe(false)
})

it ("Should translate % to false", () => {
    const result = validCharacterEng(["%"]);
    expect(result).toBe(false)
})

it ("Should translate empty string to empty", () => {
    const result = translateEnglishToMorse("");
    expect(result).toBe("")
})

// MORSE TO ENGLISH

it ("Should translate .- to a", () => {
    const result = translateMorseToEnglish([".-"]);
    expect(result).toStrictEqual(["a"])
})

it ("Should translate -... to b", () => {
    const result = translateMorseToEnglish(["-..."]);
    expect(result).toStrictEqual(["b"])
})

it ("Should translate  -.-. to c", () => {
    const result = translateMorseToEnglish(["-.-."]);
    expect(result).toStrictEqual(["c"])
})

it ("Should translate -.. to d", () => {
    const result = translateMorseToEnglish(["-.."]);
    expect(result).toStrictEqual(["d"])
})

it ("Should translate . to e", () => {
    const result = translateMorseToEnglish(["."]);
    expect(result).toStrictEqual(["e"])
})

it ("Should translate ..-. to f", () => {
    const result = translateMorseToEnglish(["..-."]);
    expect(result).toStrictEqual(["f"])
})

it ("Should translate --. to g", () => {
    const result = translateMorseToEnglish(["--."]);
    expect(result).toStrictEqual(["g"])
})

it ("Should translate .... to h", () => {
    const result = translateMorseToEnglish(["...."]);
    expect(result).toStrictEqual(["h"])
})

it ("Should translate .. to i", () => {
    const result = translateMorseToEnglish([".."]);
    expect(result).toStrictEqual(["i"])
})

it ("Should check if < is valid and return false", () => {
    const result = validCharacterMorse(["<"]);
    expect(result).toBe(false)
})

it ("Should check if = is valid and return false", () => {
    const result = validCharacterMorse(["="]);
    expect(result).toBe(false)
})

it ("Should check if : is valid and return false", () => {
    const result = validCharacterMorse([":"]);
    expect(result).toBe(false)
})

it ("Should check if * is valid and return false", () => {
    const result = validCharacterMorse(["*"]);
    expect(result).toBe(false)
})

it ("Should check if & is valid and return false", () => {
    const result = validCharacterMorse(["&"]);
    expect(result).toBe(false)
})

it ("Should check if a is valid and return false", () => {
    const result = validCharacterMorse(["a"]);
    expect(result).toBe(false)
})

it ("Should translate 1 to false", () => {
    const result = validCharacterMorse(["1"]);
    expect(result).toBe(false)
})

it ("Should check if h is valid and return false", () => {
    const result = validCharacterMorse(["h"]);
    expect(result).toBe(false)
})
