// #### GAME DATA
let [sound, randNumber, correct, score, timesUp, rounds] = ["", 0, 0, 0, 0, 0]

let user = [
    { avatar: "🧛", flm: "rjb", password: "periwinKL3", topScore: "30" },
    { avatar: "🖖", flm: "nim", password: "passWorD", topScore: "25" },
    { avatar: "👽", flm: "et", password: "123abc!@#", topScore: "20" }
]

let colors = ["redhex", "bluehex", "greenhex", "yellowhex"]

let simon = []

let player = []

let difficulty = { easy: 10, medium: 20, hard: 30 }

// ####  GAME FUNCTIONS
// ---- Add a random sequence to Simon Array
let addToSimon = () => {
    console.log("Get the next sequence for Simon to play.")
    randNumber = Math.floor(Math.random() * Math.floor(4))
    simon.push(colors[randNumber])
    activateDiv(colors[randNumber])
}
// ---- Update Player Array
let addToPlayer = (addColor) => {
    player.push(addColor)
}
// ---- Initialize the Match
let initalizeMatch = () => {
    [sound, randNumber, correct, score, timesUp, rounds] = ["", 0, 0, 0, 0, 0]
    document.getElementById("liBee").innerHTML = `🐝 BEE ${rounds}`
    document.getElementById("liUser").innerHTML = `🧛 RJB ${correct}`
}
// ---- Take a turn
let takeTurn = (whosTurn, y) => {
    if (whosTurn === "computer") {
        console.log(`computer says ${whosTurn}`)
        addToSimon()
        rounds++
        document.getElementById("liBee").innerHTML = `🐝 BEE ${rounds}`
    } else {
        console.log(`player's ${y} turn`)
        addToPlayer()
        // The setTimeout() method calls a function or evaluates an expression after milliseconds.
        // Tip: Use the clearTimeout() method to prevent the function from running.
        // setTimeout(function, milliseconds, param1, param2, ...)
        let interval = setInterval(evalResponse(), 40000, y)
        // if(y >= simon.length){
        //     clearInterval(interval)
        // }
    }
}
// ---- Is the current selection correct
let evalResponse = (y) => {
    if (player[y] === simon[y]) {
        correct++
        document.getElementById("liUser").innerHTML = `🧛 RJB ${correct}`
        score = `${correct} out of ${rounds}`
    } else {
        endGame()
    }
}

// #### ACTIVATE DIV
let activateDiv = (hexID) => {
    switch (hexID) {
        case 'redhex':
            sound = new Audio('audio/red.mp3')
            document.getElementById("redhex").style.background = "radial-gradient(circle, white 50%, #ff0000, #ff0000)"
            setTimeout(function () { document.getElementById("redhex").style.background = "#ff0000", 12000; })
            break
        case 'bluehex':
            sound = new Audio('audio/blue.mp3')
            document.getElementById("bluehex").style.background = "radial-gradient(circle, white 50%, #0000ff, #0000ff)"
            setTimeout(function () { document.getElementById("bluehex").style.background = "#0000ff", 12000; })
            break
        case 'yellowhex':
            sound = new Audio('audio/yellow.mp3')
            document.getElementById("yellowhex").style.background = "radial-gradient(circle, white 50%, #ffd900, #ffd900)"
            setTimeout(function () { document.getElementById("yellowhex").style.background = "#ffd900", 12000; })
            break
        default:
            sound = new Audio('audio/green.mp3')
            document.getElementById("greenhex").style.background = "radial-gradient(circle, white 50%, #00ff00, #00ff00)"
            setTimeout(function () { document.getElementById("greenhex").style.background = "#00ff00", 12000; })
            break
    }
    sound.play()
}

// -1--- Begin New Game
let newGame = () => {
    initalizeMatch()
    rounds = 0
    takeTurn("computer",rounds)
    // for(let x = 0; x < rounds; x++){
    for (let y = 0; y < rounds; y++) {
        takeTurn("computer", y)
        takeTurn("player", y)
    }
    // }
}

// #### END GAME
let endGame = () => {
    sessionStorage.setItem('winner', document.getElementById("liUser").innerHTML)
    location.reload()
}

// #### EVENT HANDLER SECTION
window.addEventListener('keydown', function (e) {
    if ((e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) && (e.target.nodeName == 'BODY')) {
        e.preventDefault();
        clearTimeout(timesUp)
        return false;
    }
}, true);
document.getElementById("redhex").addEventListener("click", function () {
    // clearTimeout(timesUp)
    activateDiv("redhex")

})
document.getElementById("bluehex").addEventListener("click", function () {
    // clearTimeout(timesUp)
    activateDiv("bluehex")

})
document.getElementById("yellowhex").addEventListener("click", function () {
    // clearTimeout(timesUp)
    activateDiv("yellowhex")
})
document.getElementById("greenhex").addEventListener("click", function () {
    // clearTimeout(timesUp)
    activateDiv("greenhex")
})
document.getElementById("btnPlay").addEventListener("click", function () {
    newGame()
})
document.getElementById("btnEnd").addEventListener("click", function () {
    clearTimeout(timesUp)
    endGame()
})