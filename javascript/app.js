// ####  ----------------------------------------           GAME DATA           ------------------------------------------------  ####
let [sound, randNumber, correct, total, score, match, timesUp, iArray] = ["", 0, 0, 0, "", "active", 0, 0]

// ---- User Profile (Stretch Goal)
// array of objects
// ****
let user = [
    { avatar: "🧛", flm: "rjb", password: "periwinKL3", topScore: "30" },
    { avatar: "🖖", flm: "nim", password: "passWorD", topScore: "25" },
    { avatar: "👽", flm: "et", password: "123abc!@#", topScore: "20" }
]

// ---- Colors Array
let colors = ["red", "blue", "green", "yellow", "blue"]

// ---- Simon Sequence Array traditional, random array of colors 
let simon = []

// ---- Musical Array musical, nested array of objects
let musical = [
    { song: "Itsy-Bitsy Spider", notes: 5, sequence: ["G", "C", "C", "C", "D", "E", "E", "E", "D", "C", "D", "E", "C", "E", "E", "F", "G", "G", "F", "E", "F", "G", "E", "C", "C", "D", "E", "E", "D", "C", "D", "E", "C", "G", "G", "C", "C", "C", "D", "E", "E", "E", "D", "C", "D", "E", "C"] },
    { song: "Old McDonald Had A Farm", notes: 5, sequence: ["C", "C", "C", "G", "A", "A", "G", "E", "E", "D", "D", "C", "G", "C", "C", "C", "G", "A", "A", "G", "E", "E", "D", "D", "C", "G", "G", "C", "C", "C", "G", "G", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "G", "A", "A", "G", "E", "E", "D", "D", "C"] },
    { song: "Row Row Row Your Boat", notes: 5, sequence: ["D", "D", "D", "E", "F#", "F#", "E", "F#", "G", "A", "D", "D", "D", "A", "A", "A", "F#", "F#", "F#", "D", "D", "D", "A", "G", "F#", "E", "D"] },
    { song: "Twinkle Twinkle Little Star", notes: 6, sequence: ["E", "E", "B", "B", "C#", "C#", "B", "A", "A", "G#", "G#", "F#", "F#", "E", "B", "B", "A", "A", "G#", "G#", "F#", "B", "B", "A", "A", "G#", "G#", "F#", "E", "E", "B", "B", "C#", "C#", "B", "A", "A", "G#", "G#", "F#", "F#", "E"] }
]

// ---- Player Sequence - array of colors
let player = []

// ---- Top Five (Stretch Goal)
//write to a file
//let topFivePlayers = [fml,correct,total,%]

// ---- Simon Games - traditional,music,lights out,shuffle
//      traditional - repeat the pattern Simon sets
//      musical     - finish the song before Simon
//      lights out  - sound only, play by ear
//      shuffle     - rearrange position after Simon's turn
let games = ["traditional", "musical", "lightsOut", "shuffle"]


// ####  ----------------------------------------       GAME FUNCTIONS      ------------------------------------------------ ####
// ---- Signup - Create and store new user info (Stretch Goal)
// ---- Login  - Retrieve user info (Stretch Goal)
// ---- Set Difficulty Level

// ---- Add a random sequences to Simon Array
let addToSimon = () => {
    console.log("Get the next sequence for Simon to play.")
    randNumber = Math.floor(Math.random() * Math.floor(4))
    simon.push(colors[randNumber])
}
// ---- Initialize the Match
let initalizeMatch = () => {
    [randNumber, correct, total, score, match, timesUp, iArray] = [0, 0, 0, 0, "active", 0, 0]
    console.log("Match Initialized")
}
// ---- Take a turn
let takeTurn = (whosTurn, match) => {
    if (whosTurn === "computer") {
        addToSimon()
    } else {
        addToPlayer()
    }
    console.log(`It is ${whosTurn}'s turn and the match is ${match}.`)
    // simulate a click of simon's choosen button
    // the div should light up and make a sound


    // player is on a 4 second timer
}

// -1--- Shuffle - changes the order of my divs but uses the array simon[]

// ---- Update Score
let updateScore = () => {
    if (player[iArray === simon[iArray]]) {
        correct++
    }
    total = simon.length
    score = `${correct} out of ${total}`
    console.log(score)
    return score
}
// ---- Update Player Array
let addToPlayer = (addColor) => {
    // player.push(addColor)
}
// -1--- Losing Wrap-up
let losingWrapUp = () => {
    console.log("losingWrapUp")
}
// -1--- Winning Wrap-up
let winningWrapUp = () => {
    console.log("winningWrapUp")
    sessionStorage.setItem('Player', user)
}
// -1--- End Game
let endGame = () => {
    if ((match === "complete") || (match === "canceled")) {
        winningWrapUp()
    } else {
        losingWrapUp()
    }

    //display stats prominently on screen in a modal
    //match = true
    //blink new game button

    console.log("End Game")

}
// ---- Is the current selection correct
let evalResponse = (iArray) => {
    if (player[iArray] === simon[iArray]) {
        addToPlayer()
        updateScore()
        // match = "active"
        return match
    }
    match = "complete"
    return match
}
// -1--- Begin New Game
let newGame = () => {
    initalizeMatch()
    // order of play
    // simon initiatesplay
    //play sound, light up,
    //LOOP: myTurn(simon),timer(myTurn(player)),evalResponse :exit- if isCorrect = false (wrong answer)
    // timer is set for player
    // if played in time results are evaluated
    // if time expires then match="expired"
    // if player presses esc then match="canceled"
    for (let upperLimit = 0; upperLimit != -1; upperLimit++) {
        takeTurn("computer", "active")
        player = []
        for (let lowerLimit = 0; lowerLimit < simon.length; lowerLimit++) {
            timesUp = setTimeout(endGame(), 40000)
            takeTurn("human", evalResponse(lowerLimit))
            console.log(lowerLimit)
        }
    }
}

let activateDiv = (hexID) => {
    switch (hexID) {
        case 'redhex':
            sound = new Audio('audio/red.mp3')
            // Shout out to soloLearn CSS
            document.getElementById("redhex").style.background = "radial-gradient(circle, white 25%, #ff0000, #ff0000)"
            setTimeout(function(){document.getElementById("redhex").style.background = "#ff0000", 12000;})
            break
        case 'bluehex':
            sound = new Audio('audio/blue.mp3')
            document.getElementById("bluehex").style.background = "radial-gradient(circle, white 25%, #0000ff, #0000ff)"
            setTimeout(function(){document.getElementById("bluehex").style.background = "#0000ff", 12000;})
            break
        case 'yellowhex':
            sound = new Audio('audio/yellow.mp3')
            document.getElementById("yellowhex").style.background = "radial-gradient(circle, white 25%, #ffd900, #ffd900)"
            setTimeout(function(){document.getElementById("yellowhex").style.background = "#ffd900", 12000;})
            break
        default:
            sound = new Audio('audio/green.mp3')
            document.getElementById("greenhex").style.background = "radial-gradient(circle, white 25%, #00ff00, #00ff00)"
            setTimeout(function(){document.getElementById("greenhex").style.background = "#00ff00", 12000;})
            break
    }
    sound.play();
}
//^^^REMOVE CONSOLE LOG TESTING
console.log(randNumber, correct, total, score, match)
console.log(match)
console.log(user)
console.log(colors)
console.log(simon)
console.log(musical)
console.log(player)
console.log(games)
console.log(newGame)
addToSimon()
console.log(simon)
addToPlayer("blue")
console.log(player)
// updateScore()
evalResponse(0)
console.log(evalResponse(0))
console.log("newGame()")
// newGame()



// #### ----------------------------------------          GAME THREAD  


// #### ----------------------------------------      EVENT HANDLER SECTION        ####  ####  ####  ####  ####  ####  ####  ####
// ---- Load
document.addEventListener("load", function () {

})
window.addEventListener('keydown', function (e) {
    if ((e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) && (e.target.nodeName == 'BODY')) {
        e.preventDefault();
        return false;
    }
}, true);
document.getElementById("redhex").addEventListener("click", function () {
    activateDiv("redhex")
    
})
document.getElementById("bluehex").addEventListener("click", function () {
    activateDiv("bluehex")
    
})
document.getElementById("yellowhex").addEventListener("click", function () {
    activateDiv("yellowhex")
})
document.getElementById("greenhex").addEventListener("click", function () {
    activateDiv("greenhex")
})
document.getElementById("btnPlay").addEventListener("click", function () {

    // newGame()
})
document.getElementById("btnEnd").addEventListener("click", function () {
    // clearTimeout(timesUp)
    // endGame()
})
// document.addEventListener("canplay", function(){

//})

// Sounds from:  https://www.soundjay.com/button-sounds-5.html  
