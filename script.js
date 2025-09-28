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
    var select = document.getElementById('backgrounds');
    var selectedOption = select.options[select.selectedIndex];

    var forecolor = selectedOption.getAttribute('data-forecolor');
    var boxes = document.getElementsByClassName('score-box');
    for (var i = 0; i < boxes.length; i++) { boxes[i].style.color = forecolor; }

    var selectedBackground = selectedOption.value;
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
