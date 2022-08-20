
function ludoGame() {
    const dice_1 = Math.floor(Math.random() * 6) + 1;
    const dice_2 = Math.floor(Math.random() * 6) + 1;
    const player_1 = `dices/dice_${dice_1}.webp`;
    const player_2 = `dices/dice_${dice_2}.webp`;
    document.getElementById('playerone').setAttribute('src', player_1);
    document.getElementById('playertwo').setAttribute('src', player_2);
    if(dice_1>dice_2){
        document.getElementById('title').innerHTML = "Player 1 won :)";
    }
    else if(dice_1<dice_2){
        document.getElementById('title').innerHTML = "Player 2 won :)";
    }
    else{
        document.getElementById('title').innerHTML = "Draw Play again :)";
    }
}