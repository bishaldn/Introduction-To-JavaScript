var monster = document.getElementById('evil');
monster.addEventListener('animationiteration',function (){
    var pos = Math.floor((Math.random()*3.2)*100);
    monster.style.left= pos+"px";
})
//move doraemon
var hero = document.getElementById('dora');

window.addEventListener("keydown",function(e){
    if(e.keyCode=='39'){
        var heroLeft = parseInt(this.window.getComputedStyle(hero).getPropertyValue('left'));
        console.log(heroLeft);
        if(heroLeft<300){hero.style.left = (heroLeft+ 80)+"px";}
    }
    if(e.keyCode=='37'){
        var heroLeft = parseInt(this.window.getComputedStyle(hero).getPropertyValue('left'));
        if(heroLeft>10){hero.style.left = (heroLeft- 80)+"px";}
    }
})