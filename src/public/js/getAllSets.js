var setsPerPage = 100
const searchCryteria=[];


function startsWithALetter(variable, letter){
    //let filteredResults=variable.filter(/./.test.bind(/^N/));

    //console.log(filteredResults);
} 

function getSetLetter(e){
	e = e || window.event;
	e = e.target || e.srcElement
//	console.log('Set Letter:' +e.id)
    setLetter = e.id
    clearScreen()

    var filteredSets = results.filter(result => result.set_name[0] == `${setLetter}`);
    //console.log(filteredSets)

    for (b = 0; b < filteredSets.length ; b++) {
        createSet(filteredSets[b])
    }
    setsFilterBar.classList.remove("d-none");
    
        }

function getAllSets(setName){
    
    // window.location.hash = '/allSets'

    clearScreen()

   

    fetchRandom=false;
    moreFilteredResults = false;
    newCards = false;
    
    window.location.hash = `/allSets`

    setsFilterBar.classList.remove("d-none");
   // document.getElementById("advancedSearchBar").classList.add("d-none"); //BORRA LOS FILTROS DE BUSQUEDA AVANZADA

   banlist = "tcg";

    cardResults.innerHTML= `
    <div id='wait'>
    <img src="/img/wait9.gif" alt="Wait" style="width: '400px'"> 
    <br>
    <h3>Searching Cards...</h3>
    </div>
    `;
    fetch("https://db.ygoprodeck.com/api/v7/cardsets.php")
    .then( cardInfo => cardInfo.json() )
    .then(data => {		
        results = data
        //console.log(searchCryteria)
        //if(data.length > 40){images = confirm("Load Images?") }
        subtitle.innerHTML= ` ${data.length} SETS`; 
        cardResults.innerHTML = '';

        setsFilterBar.innerHTML= ` 
            <span onclick='getSetLetter(this.id)'> <a href="#" value="A" id="A"> A </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="B" id="B"> B </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="C" id="C"> C </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="D" id="D"> D </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="E" id="E"> E </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="F" id="F"> F </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="G" id="G"> G </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="H" id="H"> H </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="I" id="I"> I </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="J" id="J"> J </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="K" id="K"> K </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="L" id="L"> L </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="M" id="M"> M </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="N" id="N"> N </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="O" id="O"> O </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="P" id="P"> P </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="Q" id="Q"> Q </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="R" id="R"> R </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="S" id="S"> S </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="T" id="T"> T </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="U" id="U"> U </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="V" id="V"> V </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="W" id="W"> W </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="X" id="X"> X </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="Y" id="Y"> Y </a> </span>
            <span onclick='getSetLetter(this.id)'> <a href="#" value="Z" id="Z"> Z </a> </span>
        `;


        for (b = 0; b < results.length ; b++) {
            searchCryteria.push(`${results[b]["Set Name"]}`)
        }

        for (b = 0; b < setsPerPage && !(b > results.length) ; b++) {
            if (b >= data.length){console.log('No more cards!'); return} else {
                createSet(data[b],b)
        
            }}
                moresSetCardsButton.classList.remove("d-none");
    });

   //console.log(searchCryteria)
    }

    

// function getMoressSets(setName){
   
//     fetch("https://db.ygoprodeck.com/api/v5/cardinfo.php?set="+setName)
//     .then( cardInfo => cardInfo.json() )
//     .then(data => {		
//         console.log(results)
//         console.log("loading more sets...")
//         let moreResults= resultsPerPage*2
//         for (var b = resultsPerPage;b < moreResults; b++) {
//             if (b >= data.length){console.log('No more cards!'); return} else {
//             createCard(data[b])}}
//     });
//     }

var loadedSets = setsPerPage;  
    
function getMoresSetCards(setName){
   	  
    var moreResults = loadedSets+100;
    for (b = loadedSets; b < moreResults ; b++) {
        if (b >= results.length){
            console.log('No more cards!');
            moreSetCardsButton.classList.add("d-none");
            return} 
        else {
        createSet(results[b])
        loadedSets++
        }
    }
    
}

