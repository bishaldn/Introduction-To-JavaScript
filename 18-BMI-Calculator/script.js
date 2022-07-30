function myFun(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var h = height/100;
    var m = h*h;
    var bmi = weight/m;
    
    if(bmi>19){
        document.getElementById('showResult').innerHTML = Math.round(bmi)+"<br>"+"You are Healthy";
    }
    
    else{
        document.getElementById('showResult').innerHTML = Math.round(bmi)+"<br>"+"Eat More to avoid under-weight";
    }
}