// models
class Player {
    constructor(score, scoreEl, btnEl) {
        this.score = score
        this.scoreEl = scoreEl
        this.btnEl = btnEl
    }

    incrementScore() {
        this.score++
        this.scoreEl.textContent = this.score
    }

    win() {
        this.scoreEl.style.color = 'green'
        this.btnEl.disabled = true
    }

    lose() {
        this.scoreEl.style.color = 'red'
        this.btnEl.disabled = true
    }

    reset() {
        this.score = 0
        this.scoreEl.textContent = 0
        this.scoreEl.style.color = 'black'
        this.btnEl.disabled = false
    }
}

let p1Score = document.querySelector('.firstscore')
let p2Score = document.querySelector('.secondscore')

let p1Btn = document.querySelector('.player1')
let p2Btn = document.querySelector('.player2')

let p1 = new Player(0, p1Score, p1Btn)
let p2 = new Player(0, p2Score, p2Btn)
let players = [p1, p2]

let resetButton = document.querySelector('.reset')
let playUpTo = document.querySelector('#playupto')

let limitScore = 0
let isGameOver = false

// event listeners
window.addEventListener('load', init)
p1Btn.addEventListener('click', addPoint)
p2Btn.addEventListener('click', addPoint)
playUpTo.addEventListener('change', setLimit)
resetButton.addEventListener('click', resetGame)

// functions
function init(event) {
    setLimit()
}

function addPoint(event) {
    let playerNumber = parseInt(event.target.getAttribute('value'))

    let currentPlayer = players[playerNumber]
    let otherPlayer
    if (playerNumber === 0) {
        otherPlayer = players[1]
    } else {
        otherPlayer = players[0]
    }

    currentPlayer.incrementScore()

    if (currentPlayer.score === limitScore) {
        currentPlayer.win()
        otherPlayer.lose()
        isGameOver = true
    }
}

function resetGame() {
    players[0].reset()
    players[1].reset()
    isGameOver = false

}

function setLimit() {
    limitScore = parseInt(playUpTo.value)
    resetGame()
}
