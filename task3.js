
function spinWords(text) {
    const splitterWords = text.split(" ")
    const reversedWords = splitterWords.map(word => {
        return word.length >= 5 ? word.split("").reverse().join("") : word
    });
    return reversedWords.join(" ")
}


const result1 = spinWords("Привет от Legacy")
console.log(result1) // тевирП от ycageL

const result2 = spinWords("This is a test")
console.log(result2) // This is a test
