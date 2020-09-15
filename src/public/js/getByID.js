

function cardID(e){
	e = e || window.event;
	e = e.target || e.srcElement
	console.log('cardID:' +e.id)
	cardId = e.id
	getCardBySet(cardId)
}




function getCardByID(cardId){
    // window.location.hash = '/searchById'
    clearScreen()
    fetchRandom=false;
    moreFilteredResults = false;
    newCards = false;
   banlist = "tcg";
   if (pathname == "/advancedSearch.html"){
    advancedSearchBar.classList.remove("d-none");
}
    cardResults.innerHTML= `
    <div id='wait'>
    <img src="/img/wait8.gif" alt="Wait" style="width: '400px'"> 
    <br>
    <h3>Searching Cards...</h3>
    </div>
    `;
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname="+cardID+"&misc=yes")
    .then( cardInfo => cardInfo.json() )
    .then(data => {	
        
        	
        //console.log(data);
        results = data;
        // if(data.length > 40){images = true}
        subtitle.innerHTML= ` ${data.length} CARDS FROM THE SET  : <span onclick='cardArchetype(this.id)'> <a href="#" class='getBySet' id='${setName}'>  ${setName}  </a></span>`;
        cardResults.innerHTML = '';

        for (b = 0; b < resultsPerPage && !(b > results.data.length) ; b++) {
            if (b >= data.length){console.log('No more cards!'); return} else {
                createCard(data.data[b])}}
                
            moreSetCardsButton.classList.remove("d-none");
    });
    }
  

function getMoreSetCards(setName){
   	
        
        var moreResults = loadedcards+10;
        for (b = loadedcards; b < moreResults ; b++) {
            if (b >= results.data.length){
                console.log('No more cards!');
                moreSetCardsButton.classList.add("d-none");
                return} 
            else {
            createCard(results.data[b])
            loadedcards++
            }
        }
        
    }
