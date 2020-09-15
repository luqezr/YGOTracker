function wichBanlist(e){
	e = e || window.event;
	e = e.target || e.srcElement
	//console.log('Banlist for : ' +e.id)
	banlist = e.id
    getBanlist(banlist)
    
    setsFilterBar.classList.remove("d-none");
    }


function wichBanlistButton(e){
	e = e || window.event;
	e = e.target || e.srcElement
	//console.log('Banlist for : ' +e.id)
    banlistButton = e.id
    
    // results.data[0].banlist_info

    // for (b = 0; b < results.data.length ; b++) {
/*
        for (b = 0; b < 2 ; b++) {
        var filteredByBanlistButton = results.data.filter(result => (`results.data${[b]}.banlist_info.ban_${banlist}` == `${banlistButton}`) && (`results.data${[b]}.banlist_info.ban_${banlist}` == `results.data${[b]}.banlist_info.ban_${banlist}` ));
        console.log(filteredByBanlistButton)
        // console.log(results.data.filter(result => (`results.data${[b]}.banlist_info.ban_${banlist}` == `${banlistButton}`) && (`results.data${[b]}.banlist_info.ban_${banlist}` == `results.data${[b]}.banlist_info.ban_${banlist}` ));)
        getBanlist(filteredByBanlistButton[b])
    }
    */
   filteredResults= results.data.filter(function(card){result.includes(banlistButton)})

    console.log('banlistButton hitted, value ='+ banlistButton+'/ banlist value ='+ banlist)

    var filteredBanlist = results.data.filter(result => banlist == `${banlistButton}`);

    console.log(filteredBanlist)
    console.log(results.data.filter(result => banlist == `${banlistButton}`))


    // for (b = 0; b < filteredBanlist.length ; b++) {
    //     getBanlist(filteredBanlist[b])
    // }
    setsFilterBar.classList.remove("d-none");
    }




function getBanlist(cardvalue){

    // if (cardvalue=="tcg"){
    //     window.location.hash = '/banlist/TCG'
    // }
    //  if (cardvalue=="ocg"){
    //     window.location.hash = '/banlist/OCG'
    // }
    // if (cardvalue=="goat"){
    //     window.location.hash = '/banlist/GOAT'
    // }
    clearScreen()
    fetchRandom=false;
    moreFilteredResults = false;
    newCards = false;
	if (pathname == "/advancedSearch.html"){
        advancedSearchBar.classList.remove("d-none");
    }
    window.location.hash = `/banlist/${cardvalue}`

    var banlist = cardvalue
    cardResults.innerHTML= `
    <div id='wait'>
    <img src="/img/laugh.gif" alt="Wait" style="width: '400px'"> 
    <br>
    <h3>Searching Cards...</h3>
    </div>
    `;
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist="+banlist+"&misc=yes&sort=new")
    .then( cardInfo => cardInfo.json() )
    .then(data => {		
        //console.log(data)
        results = data;
        currentBanlist = data



        subtitle.innerHTML= ` ${results.data.length} cards from the Banlist :  ${banlist}  </a></span> `;
        cardResults.innerHTML = '';
        /*
        setsFilterBar.innerHTML= ` 
        <span onclick='wichBanlistButton(this.id)'> <a href="#" value="Banned" id="Banned"> Banned </a> </span>
        <span onclick='wichBanlistButton(this.id)'> <a href="#" value="Limited" id="Limited"> Limited </a> </span>
        <span onclick='wichBanlistButton(this.id)'> <a href="#" value="Semi-Limited" id="Semi-Limited"> Semi-Limited </a> </span>
        `
        */
        for (var b = 0; b < resultsPerPage ; b++) {
            createCard(data.data[b])}
            
            moreBanlistCardsButton.classList.remove("d-none");
            
     
    }
    );



    }

    var loadedcards = resultsPerPage ;
    
    function getMoreBanlistCards(banlist){
   	
        var moreResults = loadedcards+10;
        for (b = loadedcards; b < moreResults ; b++) {
            if (b >= results.data.length){
                console.log('No more cards!');
                moreBanlistCardsButton.classList.add("d-none");
                return} 
            else {
            createCard(results.data[b])
            loadedcards++
            }
        }
        
    }



    