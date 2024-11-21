let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

const square = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");

function updateSquares() {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i]
    }
}

updateSquares();

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function () {
        const clickedColor = this.style.backgroundColor

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "¡Correcto!"
            changeColors(pickedColor)
            h1.style.color = pickedColor
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Inténtalo nuevamente"
        }
    });
}


function changeColors(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    const arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function resetGame() {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = ""
    resetButton.textContent = "Nuevos Colores"
    h1.style.color = "white"
    updateSquares()
}

resetButton.addEventListener("click", resetGame)

function toggleSelectedButton(buttonToSelect, buttonToDeselect) {
    buttonToSelect.classList.add("selected")
    buttonToDeselect.classList.remove("selected")
}

function adjustDifficulty(squares, num) {
    numSquares = num
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = ""
    h1.style.color = "white"

    for (let i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i]
            square[i].style.display = "block"
        } else {
            square[i].style.display = "none"
        }
    }
}

easyButton.addEventListener("click", function () {
    toggleSelectedButton(easyButton, hardButton)
    adjustDifficulty(square, 3)
});

hardButton.addEventListener("click", function () {
    toggleSelectedButton(hardButton, easyButton)
    adjustDifficulty(square, 6)
});
/* Codigo antes de aplicar el principio DRY

let numSquares = 6;

let colors = generateRandomColors(numSquares)

const square = document.querySelectorAll(".square")

let pickedColor = pickColor()

let colorDisplay = document.querySelector("#colorDisplay")
colorDisplay.textContent = pickedColor

let messageDisplay = document.querySelector("#message")

let h1 = document.querySelector("h1")

let resetButton = document.querySelector("#reset")

let easyButton = document.querySelector("#easy")
let hardButton = document.querySelector("#hard")

for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i]

    square[i].addEventListener("click", function () {
        const clickedColor = this.style.backgroundColor

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "¡Correcto!"
            changeColors(pickedColor)
            h1.style.color = pickedColor
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Inténtalo nuevamente"
        }
    })
};

function changeColors(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "Nuevos Colores"
    h1.style.color = "white";

    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    }
});

easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    numSquares = 3
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = ""
    h1.style.color = "white"

    for (let i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i]
            square[i].style.display = "block"
        } else {
            square[i].style.display = "none"
        }
    }
})

hardButton.addEventListener("click", function () {
    hardButton.classList.add("selected")
    easyButton.classList.remove("selected")
    numSquares = 6
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = ""
    h1.style.color = "white"

    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i]
        square[i].style.display = "block"
    }
});*/