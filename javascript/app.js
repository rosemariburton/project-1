// #### GAME DATA
let [sound, randNumber, correct, score, timesUp, rounds, hexID] = ["", 0, 0, 0, 0, 0, ""]

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
    randNumber = Math.floor(Math.random() * Math.floor(4))
    simon.push(colors[randNumber])
    activateDiv(colors[randNumber])
    // console.log(simon)
    // fs.writeFileSync('log.out', `${util.format(...args)}\n`, { flag: 'a' });
}
// ---- Update Player Array
let addToPlayer = (addColor) => {
    player.push(addColor)
    // console.log(player)
}
// ---- Initialize the Match
let initalizeMatch = () => {
    [sound, randNumber, correct, score, timesUp, rounds] = ["", 0, 0, 0, 0, 0]
    document.getElementById("liBee").innerHTML = `🐝 BEE 0`
    document.getElementById("liUser").innerHTML = `🧛 RJB 0`
}
// ---- Is the current selection correct
let evalResponse = (y) => {
    if (player[y] === simon[y]) {
        correct++
        document.getElementById("liUser").innerHTML = `🧛 RJB ${correct}`
        score = `${correct} out of ${rounds}`
        // console.log("correct")
    } else {
        // console.log("wrong")
        window.clearInterval()
        endGame()
    }
}

// #### ACTIVATE DIV
let activateDiv = (hexID) => {
    switch (hexID) {
        case 'redhex':
            sound = new Audio('audio/red.mp3')
            document.getElementById("redhex").style.background = "radial-gradient(circle, #ffffff 50%, #ff0000, #ff0000)"
            setTimeout(function () { document.getElementById("redhex").style.background = "#ff0000", 12000; })
            break
        case 'bluehex':
            sound = new Audio('audio/blue.mp3')
            document.getElementById("bluehex").style.background = "radial-gradient(circle, #ffffff 50%, #0000ff, #0000ff)"
            setTimeout(function () { document.getElementById("bluehex").style.background = "#0000ff", 12000; })
            break
        case 'yellowhex':
            sound = new Audio('audio/yellow.mp3')
            document.getElementById("yellowhex").style.background = "radial-gradient(circle, #ffffff 50%, #ffd900, #ffd900)"
            setTimeout(function () { document.getElementById("yellowhex").style.background = "#ffd900", 12000; })
            break
        default:
            sound = new Audio('audio/green.mp3')
            document.getElementById("greenhex").style.background = "radial-gradient(circle, #ffffff 50%, #00ff00, #00ff00)"
            setTimeout(function () { document.getElementById("greenhex").style.background = "#00ff00", 12000; })
            break
    }
    sound.play()
}

// -1--- Begin New Game
let newGame = () => {
    initalizeMatch()
    rounds = 0
    let i = 0;
    // Simon is set on a short timer of .4 seconds with counter rounds incrementing
    const interval = setInterval(() => {
        // activateDiv(simon[i])
        addToSimon()
        rounds++
        rounds += ""
        document.getElementById("liBee").innerHTML = `🐝 BEE ${rounds}`
        // Player is set on a timer of 4 seconds
        const interval2 = setInterval(() => {
            divID = document.querySelector(".honeycombs").addEventListener("click", function () {
                if (this.id === simon[rounds - 1]) {
                    // they match
                    addToPlayer(this.id)
                    correct++
                    correct += ""
                    document.getElementById("liUser").innerHTML = `🧛 RJB ${correct}`
                    // console.log("correct")
                } else {
                    // console.log("wrong answer")

                    endGame()
                }
                })
        }, 40000);
        i += 1;
        if (i >= simon.length) {
            clearInterval(interval)
            clearInterval(interval2)
        }
    }, 400);
}

// #### END GAME
let endGame = () => {
    sessionStorage.setItem('winner', document.getElementById("liUser").innerHTML)
    // console.log(document.getElementById("liUser").innerHTML)
    location.reload()
}

// #### EVENT HANDLER SECTION
window.addEventListener('keydown', function (e) {
    if ((e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) && (e.target.nodeName == 'BODY')) {
        e.preventDefault();
        clearInterval(interval)
        clearInterval(interval2)
        return false;
    }
}, true);
document.getElementById("redhex").addEventListener("click", function () {
    // clearInterval(interval2)
    activateDiv("redhex")

})
document.getElementById("bluehex").addEventListener("click", function () {
    // clearInterval(interval2)
    activateDiv("bluehex")

})
document.getElementById("yellowhex").addEventListener("click", function () {
    // clearInterval(interval2)
    activateDiv("yellowhex")
})
document.getElementById("greenhex").addEventListener("click", function () {
    // clearInterval(interval2)
    activateDiv("greenhex")
})
document.getElementById("btnPlay").addEventListener("click", function () {
    newGame()
})
document.getElementById("btnEnd").addEventListener("click", function () {
    // clearInterval(interval)
    // clearInterval(interval2)
    endGame()
})