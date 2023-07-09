let music = new Audio("music.mp3")
let turnSound = new Audio("ting.mp3")
// let gameSound = new Audio('music.mp3')
let gameOverAudio = new Audio("gameover.mp3")

let turn = 'X'
let gameover = false
// -------------------------- Function to Change Turn -------------------
const changeTurn = () => {
    return turn === 'X' ? '0' : trun = 'X'
}
// -------------------------- Function to Check Win ----------------------
const CheckWin = () => {
    let boxText = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.getElementById("info").innerText = boxText[e[0]].innerText + ' Won'
            gameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px'
            music.play()
            setTimeout(() => {
                alert('Press Any Key to Continue...!')
                window.location.reload()
            }, 7000);
        }
    });

}
// CheckWin()
// ----------------------------- Game Logic ---------------------
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            CheckWin();
            if (!gameover) {
                document.getElementById("info").innerText = "Turn for " + turn;
            }
        }
    })
})

// ------------------------ Reset Function ---------------------
const resetFunc = () => {
    turn = 'X'
    // console.log(turn)
    Array.from(boxes).forEach(element => {
        // console.log(element)
        let boxtext = element.querySelector('.boxtext');
        boxtext.innerText = '';

    })
    document.getElementById("info").innerText = "Turn for " + turn;
}


let reSetBtn = document.getElementById('reSet')
// console.log(reSetBtn)
reSetBtn.addEventListener('click', () => {
    resetFunc()
})