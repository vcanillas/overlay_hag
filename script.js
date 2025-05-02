let leftScore = 0;
let rightScore = 0;

function increment(side) {
    if (side === 'left') {
        leftScore++;
    } else {
        rightScore++;
    }
    updateScores();
}

function reset() {
    leftScore = 0;
    rightScore = 0;
    updateScores();
}

function invert() {
    [leftScore, rightScore] = [rightScore, leftScore];
    updateScores();
}

function updateScores() {
    document.getElementById('box-left').textContent = leftScore;
    document.getElementById('box-right').textContent = rightScore;
}

function changeBackground() {
    let selectedBackground = document.getElementById('backgrounds').value;
    document.body.style.backgroundImage = `url('${selectedBackground}')`;
}


