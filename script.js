let leftScore = 0;
let rightScore = 0;

function increment(value, side) {
    side === 'left' ? leftScore += (value) : rightScore += (value);
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

function moveSelection(direction) {
    let selectBox = document.getElementById("backgrounds");
    let currentIndex = selectBox.selectedIndex;
    let newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < selectBox.options.length) {
        selectBox.selectedIndex = newIndex;
    }
}
