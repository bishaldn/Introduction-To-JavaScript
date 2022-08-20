//https://type.fit/api/quotes// api link

let realData = '';
let quotesAuthor='';
const txt = document.getElementById('q-text');
const athor = document.getElementById('a-text');
const btn = document.getElementById('btn-t-next');
const getNewQuotes = () =>{
    let num = Math.floor(Math.random()*100);
    txt.innerHTML = realData[num].text;
    quotesAuthor = realData[num].author;
    if(quotesAuthor==null){
        athor.innerHTML = 'By-'+" "+'unknown';
    }
    else{
        athor.innerHTML= 'By-'+" "+quotesAuthor;
    }
    
}
const getQuotes = async() => {
    const api = 'https://type.fit/api/quotes';
    try{
     let data =  await fetch(api);
     realData = await data.json();
     console.log(realData)
    getNewQuotes();
    }catch(error){}
};
btn.addEventListener('click', getNewQuotes);

getQuotes();

