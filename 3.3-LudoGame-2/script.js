var row=1;
var a=[];
var sum1=0;
function ludoGameOne() {
    const dice_1 = Math.floor(Math.random() * 6) + 1;
    
    const player_1 = `dices/dice_${dice_1}.webp`;
    
    document.getElementById('playerone').setAttribute('src', player_1);
    var display = document.getElementById('score-table-1');
    var newRow  = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = dice_1;
    
    a.push(dice_1);
    if(a[4]){
        for(var i=0;i<5;i++){
            sum1=sum1+a[i];
        }
        console.log(sum1)
        
    }
}
var b=[];
var sum2=0;
function ludoGameTwo() {
    var row1=1;
   
    
    const dice_2 = Math.floor(Math.random() * 6) + 1;

    const player_2 = `dices/dice_${dice_2}.webp`;
    
    document.getElementById('playertwo').setAttribute('src', player_2);
    var displayq = document.getElementById('score-table-2');
    
    var newRow  = displayq.insertRow(row1);
    var cel1 = newRow.insertCell(0);
    cel1.innerHTML=dice_2;
    b.push(dice_2);
    if(b[4]){
        for(var i=0;i<5;i++){
            sum2=sum2+b[i];
        }
        console.log(sum2)
      winner();  
    }
    
}

function winner(){
    if(sum1>sum2){
        document.getElementById('title').innerHTML = "Player-1 WON";
        document.getElementById('title').style.color='red';
        document.getElementById('h31').innerHTML = `Total Score: ${sum1}`;
        document.getElementById('h32').innerHTML = `Total Score: ${sum2}`;
    }
    else if(sum1<sum2){
        document.getElementById('title').innerHTML = "Player-2 WON";
        document.getElementById('title').style.color='red';
        document.getElementById('h31').innerHTML = `Total Score: ${sum1}`;
        document.getElementById('h32').innerHTML = `Total Score: ${sum2}`;
    }
    else{
        document.getElementById('title').innerHTML = "Draw";
        document.getElementById('title').style.color='red';
        document.getElementById('h31').innerHTML = `Total Score: ${sum1}`;
        document.getElementById('h32').innerHTML = `Total Score: ${sum2}`;
    }
}
alert("Only 5 trails at once");