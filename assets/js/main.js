// ==================================
// lvl 1_1
// ==================================

let list = "";
for (let i = 1; i <= 10; i++) {
    console.log("Hello World " + i);
}

// ==================================
// lvl 1_2
// ==================================

let numArray = [];
for (let i = 0; i <= 10; i++) {
    numArray.push(i);

} console.log(numArray);

// ==================================
// lvl 1_4
// ==================================

let names = ["Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio"]
for (let i = 0; i < names.length; i++) {
    let name = names[i];
    console.log(i, name)
}

// ==================================
// lvl 1_6
// ==================================
let retArray = [];
for (let i = 1; i <= 100; i++) {
    retArray.push(`image_${i}.jpg`);
} console.log(retArray)

// ==================================
// lvl 1_7
// ==================================

let i = 0;
do {
    i += 1; // avoid dauerschleife
    document.write(`The number is ${i}<br>`);
} while (i < 5)

// ==================================
// lvl 1_8
// ==================================
let x = 0;
do {
    x += 2;
    document.write(`x is ${x} <br>`)
} while (x < 18)

// ==================================
// lvl 1_9
// ==================================
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

function printWords() {
    let input = Number(document.querySelector("#inputNumber").value);
    let inputField = document.querySelector("#inputNumber")
    let output = document.querySelector("#wordList");



    for (i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length === input) {
            output.innerHTML += (`${word}<br>`);
        }
    }
    inputField.value = "";

}
// ==================================
// lvl 1_9 BONUS
// ==================================
function updateWordList() {
    let inputWordElement = document.querySelector("#inputWord");
    let inputWord = document.querySelector("#inputWord").value;
    let updatedArray = words.push(inputWord);
    console.log(updatedArray)
    console.log(updatedArray[2])
    console.log(words)
    console.log(words[2])

    inputWordElement.value = "";
}