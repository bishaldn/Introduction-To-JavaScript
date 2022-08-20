
function myFun(){
    var a = document.getElementById('stringRev').value;
    var b ='';
    for(var i= a.length-1;i>=0;i--){
        b+=a[i];
    }
    document.getElementById('result').value=b;
}