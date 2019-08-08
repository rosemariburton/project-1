// #### ----------------------------------------     SET VARIABLES SECTION    ------------------------------------------------  ####
let [randNumber, correct, total, score] = [0, 0, 0, 0]
let isCorrect = true

// ####  ----------------------------------------           DATA           ------------------------------------------------  ####
// ---- User Profile (Stretch Goal)
let user = [
    { avatar: "🧛", flm: "rjb", password: "periwinKL3", topScore: "30" },
    { avatar: "🖖", flm: "nim", password: "passWorD", topScore: "25" },
    { avatar: "👽", flm: "et", password: "123abc!@#", topScore: "20" }
]

// ---- Colors Array
let colors = ["red", "blue", "green", "yellow"]

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
// let topFivePlayers = [fml,correct,total,%]

// ---- Simon Games - traditional,music,lights out,shuffle
//      traditional - repeat the pattern Simon sets
//      musical     - finish the song before Simon
//      lights out  - sound only, play by ear
//      shuffle     - rearrange position after Simon's turn
let games = ["traditional", "musical", "lightsOut", "shuffle"]


// ####  ----------------------------------------       FUNCTIONS SECTION      ------------------------------------------------ ####
// ---- Signup - Create and store new user info (Stretch Goal)
// ---- Login  - Retrieve user info (Stretch Goal)
// ---- Set Difficulty Level

// ---- Add a random sequences to Simon Array
let getNextSequence = () => {
    randNumber = Math.floor(Math.random() * Math.floor(4))
    simon.push(colors[randNumber])
}
// ---- Initialize the Match
let initalizeMatch = () => {
    console.log("Match Initialized")
}

// ---- Take a turn
let takeTurn = () => {
    
}

//      simulate a click of simon's choosen button
//      the div should light up and make a sound


// -1--- Get Simon Array - parameters 
//      Step Thru Simon Array to play sequence
//      play sound, light up, whosTurn(player) 
//      end of simon array -- getNextSequence
//      end of game -- endGame

// -1--- Shuffle - changes the order of my divs but uses the array simon[]

// -1--- Timer: Second Wait on User Input
// add listener to  player's turn: addEventListener("click", setTimeout(losingWrapUp(), 4000)

// ---- Update Score
let updateScore = () => {
    correct = player.length
    total = simon.length
    score = `${correct} out of ${total}`
    return score
}

// ---- Update Player Array
let addToPlayer = (addColor) => {
    player.push(addColor)
}
// -1--- Losing Wrap-up
let losingWrapUp = () => {

}
// -1--- Winning Wrap-up
let winningWrapUp = () => {

}
// -1--- End Game
let endGame = () => {
    //won - winningWrapUp
    //lost - losingWrapUp
    //display stats prominently on screen in a modal
    //isCorrect = true
    //blink new game button

}
// ---- Is the current selection correct
let evalResponse = (iArray) => {
    if (player[iArray] === simon[iArray]) {
        addToPlayer()
        updateScore()
        return isCorrect
    }
    isCorrect = false
    return isCorrect
    endGame()
}
// -1--- Begin New Game
let newGame = () => {
    //play sound, light up,
    //LOOP: myTurn(simon),timer(myTurn(player)),evalResponse :exit- if isCorrect = false (wrong answer)
    initalizeMatch()
    
    }
//^^^REMOVE CONSOLE LOG TESTING
console.log(randNumber, correct, total, score)
console.log(isCorrect)
console.log(user)
console.log(colors)
console.log(simon)
console.log(musical)
console.log(player)
console.log(games)
console.log(newGame)
getNextSequence()
console.log(simon)
addToPlayer("blue")
console.log(player)
updateScore()
console.log(score)
evalResponse(0)
console.log(evalResponse(0))

// #### ----------------------------------------          GAME THREAD  


// #### ----------------------------------------      EVENT HANDLER SECTION        ####  ####  ####  ####  ####  ####  ####  ####
// ---- Load
// document.addEventListener("load", function(){

// })
// document.addEventListener("error", function(){

// })
document.getElementById("_btnStart").addEventListener("click", function () {
    newGame()
})
// document.addEventListener("canplay", function(){

//})