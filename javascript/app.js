// #### ----------------------------------------      EVENT HANDLER SECTIN        ####  ####  ####  ####  ####  ####  ####  ####
// ---- Load
// document.addEventListener("load", function(){

// }
// document.addEventListener("error", function(){

// }
// document.addEventListener("click", function(){

// }
// document.addEventListener("canplay", function(){

// }



// #### ----------------------------------------     SET VARIABLES SECTION    ------------------------------------------------  ####



// ####  ----------------------------------------       FUNCTIONS SECTION      ------------------------------------------------ ####
// ---- Signup - Create and store new user info (Stretch Goal)
// ---- Login  - Retrieve user info (Stretch Goal)
// ---- Set Difficulty Level
// ---- Get Simon Array - parameters 
// ---- Step Thru Simon Array to play sequence
// ---- Shuffle - changes the order of my divs but uses the array traditionalSimon
// ---- Timer: Second Wait on User Input
// ---- Is Correct
// ---- Update Score
// ---- Update Player Array
// ---- Is End
// ---- Losing Wrap-up
// ---- Winning Wrap-up
// ---- Is End



// ####  ----------------------------------------           DATA           ------------------------------------------------  ####
// ---- User Profile (Stretch Goal)
// let user = [
//     { avatar: "🧛", flm: "rjb", password: "periwinKL3", topScore: "30" },
//     { avatar: "🖖", flm: "nim", password: "periwinKL3", topScore: "25" },
//     { avatar: "👽", flm: "et", password: "periwinKL3", topScore: "20" }
// ]

// ---- Simon Sequence Array traditional, random array of colors 
let traditional = ["R", "B", "G", "Y", "B", "G", "R", "Y", "Y", "B", "R"]

// ---- Simon Sequence Array musical, nested array of objects
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