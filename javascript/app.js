// #### EVENT HANDLER SECTIN
// ---- Load
// ---- Error
// ---- Player Click

// #### SET GLOBAL VARIABLES SECTION

// #### FUNCTIONS SECTION
// ---- Signup - Create and store new user info (Stretch Goal)
// ---- Login  - Retrieve user info (Stretch Goal)
// ---- Set Difficulty Level
// ---- Get Simon Array
// ---- Step Thru Simon Array to play sequence
// ---- Shuffle
// ---- Timer: Second Wait on User Input
// ---- Is Correct
// ---- Update Score
// ---- Update Player Array
// ---- Is End
// ---- Losing Wrap-up
// ---- Winning Wrap-up
// ---- Is End

// #### DATA
// ---- User Profile (Stretch Goal)

// ---- Simon Sequence - array of colors
let traditionalSimon = {
    ["Itsy-Bitsy Spider",G,C,C,C,D,E,E,E,D,C,D,E,C,E,E,F,G,G,F,E,F,G,E,C,C,D,E,E,D,C,D,E,C,G,G,C,C,C,D,E,E,E,D,C,D,E,C],
    [],
    [],
    [],
    [],
    []}
let musicalSimon = []
let lightsOutSimon = []
let shuffleSimon = []

// ---- Player Sequence - array of colors
// ---- Top Five (Stretch Goal)

// ---- Simon Games - traditional, music, lights out,shuffle
//      traditional - repeat the pattern Simon sets
//      musical     - finish the song before Simon
//      lights out  - sound only, play by ear
//      shuffle     - rearrange position after Simon's turn
let games = ["traditional","musical","lightsOutSimon","shuffleSimon"]