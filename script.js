let leftScore = 0;
let rightScore = 0;

function increment(add, side) {
    side === 'left' ? leftScore += (add === '+' ? 1 : -1) : rightScore += (add === '+' ? 1 : -1);
    updateScores();
}

function reset() {
    rightScore = leftScore = 0;
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


