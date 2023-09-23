let bubbles = document.getElementById('bubbles');
let highScore = localStorage.getItem('highScore');
let randomNumber;
let score = 0;

function startedGame() {
    bubbles.innerHTML = `<h1>Start Game</h1>
    <button id="str">Start Game</button>`;
    str.addEventListener("click", () => {
        hitTarget();
        timer();
        createBubbles();
    });
}

function highScoreDisplay() {
    let highScoreDis = document.getElementById('highScoreDis');
    highScoreDis.innerHTML = highScore;
}

function hitTarget() {
    let hits = document.getElementById('hits');
    randomNumber = Math.floor(Math.random() * 10);
    hits.textContent = randomNumber;
}

function timer() {
    let time = 60;
    let timeShow = document.getElementById('timeShow');
    var clearTime = setInterval(() => {
        if (time > 0) {
            time--;
            timeShow.textContent = time;
        }
        else {
            clearInterval(clearTime);
            bubbles.innerHTML =
                `<h1>Game Over!!!</h1>
                <h2>Final Score is: <span>${score}</span></h2>
                <button onclick="${'location.reload()'}">Click here to restart the Game</button>`;
            if (highScore < score) {
                localStorage.setItem('highScore', score);
            }
        }
    }, 1000);
};

function scoreIncrease() {
    let scoreDis = document.getElementById('scoreDis');
    score += 10;
    scoreDis.innerHTML = score;
}

function createBubbles() {
    let bubble = "";
    for (let i = 0; i < 160; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        bubble += `
            <div class="bubble">
                <h3>${randomNumber}</h3>
            </div>`;
    };
    bubbles.innerHTML = bubble;
}

bubbles.addEventListener('click', (targetBubble) => {
    let checkTargetValue = targetBubble.target.textContent;
    if (checkTargetValue == randomNumber) {
        scoreIncrease();
        createBubbles();
        hitTarget();
    }
    else {

    }
})

startedGame();
highScoreDisplay();