function sortSetPrices(){

	for (var i = 0; i < results.data.length ; i++) {

		if (results.data[i].card_sets.length > 1) {
			console.log(results.data[i].card_sets)
			results.data.sort((a, b) => parseFloat(b.set_price) - parseFloat(a.set_price));
		}

	}

	for (var d = 0; d < resultsPerPage ; d++) {
		//console.log(data[b])
		createCard(sortedResults[d])}
	
}


function sortResults(how,value) {

	clearScreen()

	value=value

let sortedResults
	if (how=='ascending') {

		if (atk=='atk'){
			value=atk
			console.log('atk')
			sortedResults = results.data.sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
		//ordenar por atk ascendiente
		}

		if (type=='type'){
			value=type
			console.log('type')
			results.data.sort((a, b) => {
				if (a.type < b.type)
					return -1;
				if (a.type > b.type)
					return 1;
				return 0;
				});
			sortedResults=results.data		}

		for (var b = 0; b < resultsPerPage ; b++) {
			//console.log(data[b])
			createCard(sortedResults[b])}
		
			
		moreSearchedCardsButton.classList.remove("d-none");


	}

	if (how == 'descending') { 
		
	//ordenar por atk descendiente
	sortedResults = results.data.sort((a, b) => parseFloat(b.atk) - parseFloat(a.atk));
	for (var b = 0; b < resultsPerPage ; b++) {
		//console.log(data[b])
		createCard(sortedResults[b])}
	}
	
}

