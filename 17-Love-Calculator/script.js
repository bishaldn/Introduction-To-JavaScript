function myFun(){
    var b = document.getElementById('yourName').value;
    var c = document.getElementById('YourLove').value;
    document.getElementById('yourName').value="";
    document.getElementById('YourLove').value="";
    var a = Math.floor(Math.random()*100);
    if((b=='bishal') && (c=='amrita')){
        document.getElementById('ShowResult').value = '100%'; 
    }
    else if((b=='Bishal Deep Nath') && (c=='Amrita Saha')){
        document.getElementById('ShowResult').value = '100%'; 
    }
    else if((b=='Bishal') && (c=='Amrita')){
        document.getElementById('ShowResult').value = '100%'; 
    }
    else if((b=='bishal') && (c=='Amrita')){
        document.getElementById('ShowResult').value = '100%'; 
    }
    else if((b=='Bishal') && (c=='amrita')){
        document.getElementById('ShowResult').value = '100%'; 
    }
    else if((b=='bishal deep nath') && (c=='amrita saha')){
        document.getElementById('ShowResult').value = '100%'; 
    }
    

    else if((b!='') && (c!='')){
        document.getElementById('ShowResult').value = a+"%";
    }
    
    else{
        document.getElementById('ShowResult').value = 'Wrong Input';
    }
    showText();

}
function showText(){
    var res = document.getElementById('ShowResult').value;
    if(res==100+"%"){
        document.getElementById('result-text-show').innerHTML = 'Born To be Together';
    }
    else if((res<100+"%") && (res>70+"%")){
        document.getElementById('result-text-show').innerHTML = 'A perfect Match';
    }
    else if( res=='Wrong Input'){
        document.getElementById('result-text-show').innerHTML = 'Enter names to find your status';
    }
    else{
        
            document.getElementById('result-text-show').innerHTML = 'Work on your relationship';
        
    }
}