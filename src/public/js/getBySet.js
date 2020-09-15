let b



function cardSet(e){
	e = e || window.event;
	e = e.target || e.srcElement
	console.log('cardSet:' +e.id)
	setName = e.id
	getCardBySet(setName)
}



function getCardBySet(setName){
    // window.location.hash = '/getBySet'
    clearScreen()
    fetchRandom=false;
    moreFilteredResults = false;
    newCards = false;
   banlist = "tcg";
   if (pathname == "/advancedSearch.html"){
    advancedSearchBar.classList.remove("d-none");
}
 

//    document.location.href=`http://yugiohtracker.com/${setName}`
 
    cardResults.innerHTML= `
    <div id='wait'>
    <img src="/img/wait8.gif" alt="Wait" style="width: '400px'"> 
    <br>
    <h3>Searching Cards...</h3>
    </div>
    `;
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset="+setName+"&misc=yes")
    .then( cardInfo => cardInfo.json() )
    .then(data => {	
        window.location.hash = `/set/${setName}`

        	
        //console.log(data);
        results = data;
        //if(data.length > 40){images = confirm("Load Images?") }
        subtitle.innerHTML= ` ${data.data.length} CARDS FROM THE SET  : <span onclick='cardSet(this.id)'> <a href="#" class='getBySet' id='${setName}'>  ${setName}  </a></span>`;
        cardResults.innerHTML = '';

        for (b = 0; b < resultsPerPage && !(b > results.data.length) ; b++) {
            if (b >= data.length){console.log('No more cards!'); return} else {
                createCard(data.data[b])}}
                
            moreSetCardsButton.classList.remove("d-none");
    });
    }

    var loadedSet = resultsPerPage; 

function getMoreSetCards(setName){
   	
    
        var moreResults = loadedSet+10;
        for (b = loadedSet; b < moreResults ; b++) {
            if (b >= results.data.length){
                console.log('No more cards!');
                moreSetCardsButton.classList.add("d-none");
                return} 
            else {
            createCard(results.data[b])
            loadedSet++
            }
        }
        
    }
