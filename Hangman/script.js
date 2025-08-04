//list of words to be used. Update if you can
const wordList = [
    "metal", 
    "Iron", 
    "Mercury", 
    "Puzzle", 
    "Hangman", 
    "Uranium", 
    "Fever", 
    "Thermodynamics", 
    "Ceiling", 
    "Ten",
    "Jollibee",
    "TickleMonster",
    "George",
    "BestFriend",
    "Peace",
    "Remembrance",
    "Pumpkin",
    "Squash",
    "Gourd",
    "Creepjoiner",
    "Yttakin",
    "Exterminatus",
    "Cinnamon",
    "Cupcake",
    "Baguette",
    "Cocoa"
    "laptop",
    "Mousepad",
    "Keyboard",
    "Speaker",
    "Motherboard",
    "Touchscreen",
    "Computer",
    "Charger",
    "HDMI",
    "kernel",
    "Dyson",
    "star",
    "Ecumenopolis",
    "relic",
    "Hydroponics",
    "Morning",
    "Afternoon",
    "Dusk",
    "LampShade",
    "GreenHouse",
    "Door",
    "Duke",
    "Confederation",
    "Diplomacy",
    "Advance",
    "Change",
    "Large",
    "Colossal",
    "Pomegranate",
    "Multiple",
    "Numerous",
    "Infinite",
    "Setting",
    "Pillow",
    "Determination",
    "Persistence",
    "Judgement",
    "Advocate",
    "Turbine",
    "Solar",
    "Hydroelectric",
    "Green",
    "Geothermal",
    "Recycle".
    "Stopwatch",
    "inspiration",
    "clarity",
    "potential",
    "Study",
    "More",
    "Plenty",
    "Bountiful",
    "Progress",
    "Stride",
    "Journey",
    "Unwanted",
    "Broom",
    "Seedling",
    "Anonymous",
    "Oblivion",
    "Satisfied"
];

let selectWord="";
let correctLetters=[];
let wrongLetters=[];

const wordDisplay=
document.getElementById("wordDisplay");
const wrongLettersE1=
document.getElementById("wrongLetters");
const input=
document.getElementById("letterInput");
const message=
document.getElementById("message");
const startBTn=
document.getElementById("startBtn");

function updateDisplay() {
    const display=selectedWord
        .split("")
        .map(letter => (correctLetters.includes(letter) ? letter: "_"))
        .join(" ");
        wordDisplay.textContent=display;

        if (!display.includes("_")) {
            message.textContent="You Won!! >O<";
            input.disabled=true;
        }
}

function checkLose() {
    if (wrongLetters.length >= 6) {
        message.textContent = `You lost >_<. The word was "${selectedWord}"`;
        input.disabled=true;
    }
}

input.addEventListener("keyup", e => {
    const letter=
    e.target.value.toLowerCase();
    if (!letter.match(/^[a-z]$/i)) return;

    if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            updateDisplay();
        }
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            wrongLettersE1.textContent=wrongLetters.join(", ");
            checkLose();
        }
    }

    e.target.value="";
});

startBtn.addEventListener("click", () =>
{
    selectedWord=wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    correctLetters=[];
    wrongLetters=[];

    wordDisplay.textContent="_".repeat(selectedWord.length).trim();
    wrongLettersE1.textContent="";
    message.textContent="";
    input.disabled=false;
    input.focus();
    input.value="";
}
);

