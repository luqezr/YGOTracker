
// https://db.ygoprodeck.com/api/v7/cardsetsinfo.php?setcode=SDY-046



function getIdCode(e){
	e = e || window.event;
	e = e.target || e.srcElement
	//console.log('cardArchetype :' +e.id)
    setCode = e.id
    // document.getElementById('bodyAdv').classList.add('d-none')

	getCardByIdCode(setCode)
}



function getCardByIdCode(cardvalue){
    // window.location.hash = '/getByArchetype'
    clearScreen()
    fetchRandom=false;
    moreFilteredResults = false;
    newCards = false;
    banlist = "tcg";
	if (pathname == "/advancedSearch.html"){
        advancedSearchBar.classList.remove("d-none");
    }
   

    subtitle.innerHTML= '';
    
    cardResults.innerHTML= `
    <div id='wait'>
    <img src="/img/wait6.gif" alt="Wait" style="width: '400px'"> 
    <br>
    <h3>Searching Cards...</h3>
    </div>
    `;
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?id="+cardvalue)
    .then( cardInfo => cardInfo.json() )
    .then(data => {		
        results=data
        
   window.location.hash = `/cardID/${cardvalue}`

        // console.log(results)
        cardResults.innerHTML = '';
        console.log(results)
        createCard(results.data[0])
    
    
}
    );
    }
