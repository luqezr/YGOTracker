
// if(window.location.href == 'http://127.0.0.1:5500/index.html#/getAllArchetypes' || window.location.href == 'http://127.0.0.1:5500/#/getAllArchetypes') {
//     console.log('your address is /getall')
//     function load() {
//         clearScreen();
//         getAllArchetypes()
//       }; 
//       window.onload = load


//     }



// console.log(host)

// console.log(currentURL)

// console.log(`${host}${currentURL}`)


function resolveURL(){
    
    currentURL = window.location.hash
    host = window.location.host+'/'
    fullURL=host+currentURL
    pathname = window.location.pathname
    hash = window.location.hash

    console.log(host)

    console.log(currentURL)

    console.log(`${host}${currentURL}`)
    
    if (currentURL == '') {
        fetchNewCards()
    }


if (hash.includes('search')){
    
    
   // var res = hash.slice(9); //corta #/search/
    var searchedValue = hash.slice(9);
    console.log(searchedValue)
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname="+searchedValue+"&misc=yes")
		.then( cardInfo => cardInfo.json() )
        .then(data => {	
            results = data
            cardResults.innerHTML = '';
            subtitle.innerHTML= `Card Results ${results.data.length} cards : `
            for (b = 0; b < resultsPerPage && !(b > results.data.length) ; b++) {
                if (b >= data.length){console.log('No more cards!'); return} else {
                    createCard(results.data[b])}}
                    
				moreSearchedCardsButton.classList.remove("d-none");
        })
} 


if (hash.includes('archetype/')){
    
    
   // var res = hash.slice(12); //corta #/archetype/
    var searchedValue = hash.slice(12);
    console.log(searchedValue)
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype="+searchedValue+"&misc=yes")
		.then( cardInfo => cardInfo.json() )
        .then(data => {	
            results = data
            cardResults.innerHTML = '';
            subtitle.innerHTML= `${results.data.length} cards for the ${searchedValue} : `
            for (b = 0; b < resultsPerPage && !(b > results.data.length) ; b++) {
                if (b >= data.length){console.log('No more cards!'); return} else {
                    createCard(results.data[b])}}
                    
				moreSearchedCardsButton.classList.remove("d-none");
        })
} 

if (hash.includes('set/')){
        
    // var res = hash.slice(6); //corta #/set/
     var searchedValue = hash.slice(6);
     console.log(searchedValue)
     fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset="+searchedValue+"&misc=yes")
         .then( cardInfo => cardInfo.json() )
         .then(data => {	
             results = data
             cardResults.innerHTML = '';
             setName = searchedValue.replace(/%20/g," ");
             subtitle.innerHTML= `${results.data.length} cards from set <span onclick='cardSet(this.id)'> <a href="#" class='getBySet' id='${setName}'>  ${setName}  </a></span>: `
             for (b = 0; b < resultsPerPage && !(b > results.data.length) ; b++) {
                 if (b >= data.length){console.log('No more cards!'); return} else {
                     createCard(results.data[b])}}
                     
                 moreSearchedCardsButton.classList.remove("d-none");
         })
 } 

if (hash.includes('cardID')){
    
    
   // var res = hash.slice(9); //corta #/cardID/
    var searchedValue = hash.slice(9);
    console.log(searchedValue)
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?id="+searchedValue)
		.then( cardInfo => cardInfo.json() )
        .then(data => {	
            results = data
            cardResults.innerHTML = '';
           console.log(results)
            createCard(results.data[0])

                    
			
        })
} 



    switch(currentURL){
        case `#/newCards`:
          console.log("/newCards")
         fetchNewCards();
          break;          
        case ``:
        console.log("nothing")
        if (pathname == 'index.html') { 
            fetchNewCards()
        }
        if (pathname == 'advancedSearch.html') {
            getAllCards();
        }
        break;

      case `#/search`:
        console.log("/#/newCards")
        fetchNewCards();
        break;

      case `#/allSets`:
        console.log("/#/allSets")
        getAllSets()
          break;
          
     case `#/setCode`:
        console.log("/#/setCode")
        getCardBySetCode(cardvalue)
    //    getAllArchetypes()
       break;
       case `#/set`:
          console.log("/#/setName")
        //  getAllArchetypes()
         break;
      case `#/archetypes`:
        console.log("/#/archetypes")
        getAllArchetypes()
        break;
    
     case `#/getByArchetype`:
         console.log("/#/archetype")
        getAllArchetypes()
        break;

        case `#/randomCards`:
        console.log("/#/randomCards")
        fetchxRandomCards()
        break;
        case `#/staples`:
            console.log("/#/staples")
            getStaples()
        break;

        case `#/format/goat`:
            console.log("/#/format/goat")
            getByFormat('goat')
        break;
        case `#/format/ocg%20goat`:
            console.log("/#/ocg%20goat")
            getByFormat('ocg goat')
        break;
        case `#/format/rush%20duel`:
            console.log("/#/format/rush%duel")
            getByFormat('rush duel')
        break;
        case `#/format/speed%20duel`:
            console.log("/#/format/speed%20duel")
            getByFormat('speed duel')
        break;
        case `#/format/duel%20links`:
            console.log("/#/format/duel%20links")
            getByFormat('duel links')
        break;

        case `#/banlist/tcg`:
            console.log("#/banlist/tcg")
            getBanlist('tcg')
        break;
        case `#/banlist/ocg`:
            console.log("/#/banlist/ocg")
            getBanlist('ocg')
        break;
        case `#/banlist/goat`:
            console.log("/#/banlist/goat")
            getBanlist('goat')
        break;
        
    }

   
  }

  resolveURL()