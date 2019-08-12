// ####  ----------------------------------------           GAME DATA           ------------------------------------------------  ####
let [sound, randNumber, correct, total, score, match, timesUp, iArray] = ["", 0, 0, 0, "", "active", 0, 0]

// ---- User Profile (Stretch Goal)
// array of objects
let user = [
    { avatar: "🧛", flm: "rjb", password: "periwinKL3", topScore: "30" },
    { avatar: "🖖", flm: "nim", password: "passWorD", topScore: "25" },
    { avatar: "👽", flm: "et", password: "123abc!@#", topScore: "20" }
]

// ---- Colors Array
let colors = ["redhex", "bluehex", "greenhex", "yellowhex"]

// ---- Simon Sequence Array traditional, random array of colors 
let simon = []

// ---- Player Sequence - array of colors
let player = []


// ####  ----------------------------------------       GAME FUNCTIONS      ------------------------------------------------ ####
// ---- Signup - Create and store new user info (Stretch Goal)
// ---- Login  - Retrieve user info (Stretch Goal)
// ---- Set Difficulty Level
let difficulty = { easy: 10, medium: 20, hard: 30 }

// ---- Add a random sequence to Simon Array
let addToSimon = () => {
    console.log("Get the next sequence for Simon to play.")
    randNumber = Math.floor(Math.random() * Math.floor(4))
    simon.push(colors[randNumber])
    console.log("before error:  " + colors[randNumber])
    activateDiv(colors[randNumber])
}
// ---- Update Player Array
let addToPlayer = (addColor) => {
    player.push(addColor)
}
// ---- Initialize the Match
let initalizeMatch = () => {
    [sound, randNumber, correct, total, score, match, timesUp, iArray] = ["", 0, 0, 0, "", "active", 0, 0]
    updateScore()
}
// ---- Take a turn
let takeTurn = (whosTurn, match) => {
    if (whosTurn === "computer") {
        addToSimon()
        updateScore()
        // seqCount++
    } else if (match === "active"){
        addToPlayer()
        updateScore()
    } else {
        endGame()
    }
}
// ---- Is the current selection correct
let evalResponse = (iArray) => {
    if (player[iArray] >= simon[iArray]) {
        addToPlayer()
        updateScore()
        return match
    } else {
        match = "complete"
        endGame()
    }
}
// -1--- Shuffle - changes the order of my divs but uses the array simon[]

// ---- Update Score
let updateScore = () => {
    if (player[iArray === simon[iArray]]) {
        correct++
    }
    total = simon.length
    document.getElementById("liUser").innerHTML = `🧛 RJB ${correct}`
    document.getElementById("liBee").innerHTML = `🐝 BEE ${total}`
    document.getElementById("liTimer").innerHTML = `Timer:  `
    score = `${correct} out of ${total}`
    console.log("Score Updated" + score)
    return score
}

// -1--- Begin New Game
let newGame = () => {
    initalizeMatch()
    //LOOP: myTurn(simon),timer(myTurn(player)),evalResponse :exit- if isCorrect = false (wrong answer)
    // timer is set for player
    // if played in time results are evaluated
    // if time expires then match="expired"
    // if player presses esc then match="canceled"

    takeTurn("computer", "active")
    iArray = 0
    for (let upperLimit = 0; upperLimit < iArray; upperLimit++) {
        for (let lowerLimit = 0; lowerLimit < iArray; lowerLimit++) {
            setTimeout(takeTurn("human", evalResponse(lowerLimit)), 40000)
            // clearInterval(timesUp)
        }
        takeTurn("computer", "active")
        console.log(`loop on ${iArray}`)
    }
}

let activateDiv = (hexID) => {
    switch (hexID) {
        case 'redhex':
            sound = new Audio('audio/red.mp3')
            // Shout out to soloLearn CSS
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
// ---- End Game
let endGame = () => {
    sessionStorage.setItem('winner', document.getElementById("liUser").innerHTML)
    location.reload()
}


// #### ----------------------------------------      EVENT HANDLER SECTION        ####  ####  ####  ####  ####  ####  ####  ####
window.addEventListener('keydown', function (e) {
    if ((e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) && (e.target.nodeName == 'BODY')) {
        e.preventDefault();
        match = "cancelled"
        return false;
    }
}, true);
document.getElementById("redhex").addEventListener("click", function () {
    clearTimeout(timesUp)
    activateDiv("redhex")

})
document.getElementById("bluehex").addEventListener("click", function () {
    clearTimeout(timesUp)
    activateDiv("bluehex")

})
document.getElementById("yellowhex").addEventListener("click", function () {
    clearTimeout(timesUp)
    activateDiv("yellowhex")
})
document.getElementById("greenhex").addEventListener("click", function () {
    clearTimeout(timesUp)
    activateDiv("greenhex")
})
document.getElementById("btnPlay").addEventListener("click", function () {
    newGame()
})
document.getElementById("btnEnd").addEventListener("click", function () {
    clearTimeout(timesUp)
    endGame()
})