
function fetchxRandomCards(x){
    // window.location.hash = '/random';
    
   // clean screen    
   clearScreen()

// document.getElementById("advancedSearchBar").classList.add("d-none"); //BORRA LOS FILTROS DE BUSQUEDA AVANZADA

moreFilteredResults = false;
newCards = false;
   banlist = "tcg";

   window.location.hash = '/randomCards'

    subtitle.innerHTML= 'SOME RANDOM CARDS : '
    x = resultsPerPage
    
    results=[]
    results[0]=[]
    //if(resultsPerPage > 40){images = confirm("Load Images?") }
    for (var i = 0; i < x; i++) {
   
        fetchRandomCards()
     }
    
    moreRandomCardsButton.classList.remove("d-none");
     
    return 
}


function fetchRandomCards(where){
            
    var cardResults = document.querySelector('#cardResults')
    where="https://db.ygoprodeck.com/api/v7/randomcard.php"
    fetch(where)
    .then( cardInfo => cardInfo.json())
    .then(data => {
        //console.log(data)
        results[0].push(data)
        createCard(data)
        fetchRandom=true;
        
})};

function getMoreRandomCards(){
    let x = 10
    for (var i = 0; i < x; i++) {
    fetchRandomCards()
     }
    
     
    return 
}

 

