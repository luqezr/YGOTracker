

function wichFormat(e){
	e = e || window.event;
	e = e.target || e.srcElement
	//console.log('Banlist for : ' +e.id)
    format = e.id
	getByFormat(format)
}


function getByFormat(format){
    // window.location.hash = '/searchById'
    
    clearScreen()
    fetchRandom=false;
    moreFilteredResults = false;
    newCards = false;
	if (pathname == "/advancedSearch.html"){
        advancedSearchBar.classList.remove("d-none");
    }
    window.location.hash = `/format/${format}`

    banlist = "tcg";

    cardResults.innerHTML= `
    <div id='wait'>
    <img src="/img/wait8.gif" alt="Wait" style="width: '400px'"> 
    <br>
    <h3>Searching Cards...</h3>
    </div>
    `;
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?format=${format}&misc=yes`)
    .then( cardInfo => cardInfo.json() )
    .then(data => {	
        //console.log(data);
        allResults = data;
        results = data;
        format = format.toUpperCase()
        // if(data.data.length > 40){images = true}
        console.log(data)
        subtitle.innerHTML= `THERE ARE ${data.data.length} ${format} CARDS : </span>`;
        cardResults.innerHTML = '';

        //for (b = 0; b < resultsPerPage && !(b > results.length) ; b++) {
        for (b = 0; b < resultsPerPage ; b++) {
            if (b >= data.data.length){console.log('No more cards!'); return} else {
                createCard(results.data[b])}}
                
            moreSetCardsButton.classList.remove("d-none");
    });
    }
   

    var loadedCards = resultsPerPage; 
    
function getMoreSetCards(setName){
   	 
        
        var moreResults = loadedCards+10;
        for (b = loadedCards; b < moreResults ; b++) {
            if (b >= results.data.length){
                console.log('No more cards!');
                moreSetCardsButton.classList.add("d-none");
                return} 
            else {
            createCard(results.data[b])
            loadedCards++
            }
        }
        
    }
