
function cardArchetype(e){
	e = e || window.event;
	e = e.target || e.srcElement
	//console.log('cardArchetype :' +e.id)
    archetype = e.id
    // document.getElementById('bodyAdv').classList.add('d-none')

	getCardByArchetype(archetype)
}




function getCardByArchetype(cardvalue){
    var cardvalue = archetype;
    // window.location.hash = '/getByArchetype'
    clearScreen()	
    if (pathname == "/advancedSearch.html"){
        advancedSearchBar.classList.remove("d-none");
    }
    fetchRandom=false;
    moreFilteredResults = false;
    newCards = false;
    banlist = "tcg";


    subtitle.innerHTML= '';
    
    cardResults.innerHTML= `
    <div id='wait'>
    <img src="/img/wait6.gif" alt="Wait" style="width: '400px'"> 
    <br>
    <h3>Searching Cards...</h3>
    </div>
    `;

    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype="+cardvalue+"&misc=yes")
    .then( cardInfo => cardInfo.json() )
    .then(data => {		
        results=data
        
   window.location.hash = `/archetype/${cardvalue}`

        subtitle.innerHTML= ` ${results.data.length} CARDS FROM THE ARCHETYPE :<span onclick='cardArchetype(this.id)'> <a href="#" class='getByArchetype' id='${archetype}'>  ${archetype}  </a></span> `;

        cardResults.innerHTML = '';
        for (var b = 0; b < data.data.length ; b++) {
            createCard(data.data[b])}
    
    
}
    );
    }
