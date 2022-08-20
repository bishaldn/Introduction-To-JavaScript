var row = 1;
var a = [];
var sum1 = 0;
var count_1 = 0;
function ludoGameOne() {
    const dice_1 = Math.floor(Math.random() * 6) + 1;

    const player_1 = `dices/dice_${dice_1}.webp`;

    document.getElementById('playerone').setAttribute('src', player_1);
    var display = document.getElementById('score-table-1');
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = dice_1;

    a.push(dice_1);
    if (a[4]) {
        for (var i = 0; i < 5; i++) {
            sum1 = sum1 + a[i];
        }
        console.log(sum1);

    }
    removeClassTwo();
    addClassOne();
    sound();
    count_1++;
    limit(count_1);

}
var count_2 = 0;
var b = [];
var sum2 = 0;
function ludoGameTwo() {
    var row1 = 1;


    const dice_2 = Math.floor(Math.random() * 6) + 1;

    const player_2 = `dices/dice_${dice_2}.webp`;

    document.getElementById('playertwo').setAttribute('src', player_2);
    var displayq = document.getElementById('score-table-2');

    var newRow = displayq.insertRow(row1);
    var cel1 = newRow.insertCell(0);
    cel1.innerHTML = dice_2;
    b.push(dice_2);
    if (b[4]) {
        for (var i = 0; i < 5; i++) {
            sum2 = sum2 + b[i];
        }
        console.log(sum2);
        winner();
        var displayp = document.getElementById('score-table-1');
        clear(displayq);
        clear(displayp);
        setTimeout(() => {
            window.location.reload(true);
        }, 3000);

    }
    addClassTwo();
    removeClassOne();
    sound();
    count_2++;
    alert(count_1, count_2);

}

function winner() {

    if (sum1 > sum2) {
        document.getElementById('title').innerHTML = "Player-1 WON";
        document.getElementById('title').style.color = 'red';
        document.getElementById('h31').innerHTML = `Total Score: ${sum1}`;
        document.getElementById('h32').innerHTML = `Total Score: ${sum2}`;
        winSound();

    }
    else if (sum1 < sum2) {
        document.getElementById('title').innerHTML = "Player-2 WON";
        document.getElementById('title').style.color = 'red';
        document.getElementById('h31').innerHTML = `Total Score: ${sum1}`;
        document.getElementById('h32').innerHTML = `Total Score: ${sum2}`;
        winSound();

    }
    else {
        document.getElementById('title').innerHTML = "Draw";
        document.getElementById('title').style.color = 'red';
        document.getElementById('h31').innerHTML = `Total Score: ${sum1}`;
        document.getElementById('h32').innerHTML = `Total Score: ${sum2}`;
        winSound();

    }
}
function clear(display) {
    for (var i = 5; i >= 1; i--) {
        display.deleteRow(i);
    }
}
function addClassTwo() {
    document.getElementById('playertwo').classList.add('image-t');
}
function removeClassTwo() {
    document.getElementById('playertwo').classList.remove('image-t');
}

function addClassOne() {
    document.getElementById('playerone').classList.add('image-t');
}
function removeClassOne() {
    document.getElementById('playerone').classList.remove('image-t');
}
function sound() {
    const audio = new Audio();
    audio.src = './sound/dice34roll.mp3';
    audio.play();
}
function winSound() {
    const win_snd = new Audio();
    win_snd.src = './sound/win-sound.wav';
    win_snd.play();
}
function alert(one, two) {
    if ((one == 0) && (two == 1)) {
        setTimeout(() => {
            window.location.reload(true);
        }, 1000);
        document.getElementById('title').innerHTML = "Roll Dice-1 first";
        const notify = new Audio();
        notify.src = './sound/alarm.mp3';
        notify.play();

    }
}
var dec = 1;
function limit(amrita) {
    if (amrita == (5)) {
        setTimeout(() => {
            document.getElementById('title').innerHTML = "Out of trails, Complete dice-2";
        }, 1);
    }
    else if(amrita==6){
        setTimeout(() => {
            window.location.reload(true);
        }, 1000); 
        document.getElementById('title').innerHTML = "Game Over,Starting Again";
        const game_over = new Audio();
         game_over.src = './sound/gameover.wav';
        game_over.play();
    }
}