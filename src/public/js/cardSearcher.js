
let searchButton = document.getElementById("send");
clearScreen()


searchButton.addEventListener("click", function getCard(evt){
		evt.preventDefault();
		clearScreen()
		fetchRandom=false;
		moreFilteredResults = false;
		newCards = false;
		   banlist = "tcg";
		   
		if (pathname == "/advancedSearch.html"){
            advancedSearchBar.classList.remove("d-none");
        }

		var cardName = document.search.fname.value
		//console.log(cardName)
		window.location.hash = `/search/${cardName}`
		// window.location.hash = `/search/${cardName}`
		cardResults.innerHTML= `
		<div id='wait'>
		<img src="/img/wait2.gif" alt="Wait"> 
		<br>
		<h3>Searching Cards...</h3>
		</div>
		`;
		
		fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname="+cardName+"&misc=yes")
		.then( cardInfo => cardInfo.json() )
		.then(data => {	
			results=data;	
			// if (screen.width < 700) {images = true}
			//console.log(data.length)
			// if(data.data.length > 40){images = true }
			/*
			


			*/



			
			subtitle.innerHTML= `Card Results ${data.data.length} cards : `
			cardResults.innerHTML = '';
			for (var b = 0; b < resultsPerPage ; b++) {
				//console.log(data[b])
				createCard(results.data[b])}
				if (results.data.length==undefined){
					//console.log(data)
					subtitle.innerHTML=  'No results for this! :( '
					cardResults.innerHTML= `
					<div id='wait'>
					<img src="/img/error.gif" alt="Wait" style="width: '400px'"> 
					<br>
					<h3>No results for this, check your writing!</h3>
					</div>
					`;;
				}
			
				moreSearchedCardsButton.classList.remove("d-none");
		}
		);
});

var loadedResults = resultsPerPage ;

function getMoreSearchedCards(search){
   	
        
	var moreResults = loadedResults+10;
	for (b = loadedResults; b < moreResults ; b++) {
		if (b >= results.length){
			console.log('No more cards!');
			moreSearchedCardsButton.classList.add("d-none");
			return} 
		else {
		createCard(results.data[b])
		loadedResults++
		}
	}
	
}