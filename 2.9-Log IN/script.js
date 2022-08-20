let database = [
    {
        username: 'bishal',
        password: 'bishal',
    },
    {
        username: '1234',
        password: '1234',
    }

];

var user = document.getElementById('user').value;
var pass = document.getElementById('pass').value;
console.log(user);
console.log(pass);
function myFun(user,pass){
   for(var i=0;i<2;i++){
    if((user==database[i].username) && (pass==database[i].password)){
        alert('Hey, Welcome '+username);
    }
    else{
        alert('Wrong Credential , Try Again');
    }
   }
   
}