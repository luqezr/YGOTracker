var resultsPerPage = 9;
// let subtitle = document.getElementById('subtitle');
var setsFilterBar =document.getElementById('setsFilterBar')
var cardResults = document.querySelector('#cardResults')
var cardimage;
var images;

var banlist = "tcg";

// let moreCardsButton = document.getElementById("moreCardsButton");

// PARA VER EL PRECIO DE UNA CARTA DENTRO DEL ARRAY "RESULTADOS"
// results[n].card_sets[0].set_price


// $(document).ready(function () { 
//     $("#howManyPerPage").change(function(){ 
// 		let element = $(this).find('option:selected'); 
// 		showThisManyCards = element[0].value
// 		resultsPerPage = parseInt(showThisManyCards)
// 		//console.log('se van a mostrar '+ resultsPerPage + ' cartas por pagina')
//         	})});


function clearScreen(){
	moreSetCardsButton.classList.add("d-none");
	moreRandomCardsButton.classList.add("d-none");
	moreBanlistCardsButton.classList.add("d-none");
	moreSearchedCardsButton.classList.add("d-none");
	moresSetCardsButton.classList.add("d-none");
	moreArchetypesCardsButton.classList.add("d-none");
	moreFilteredCardsButton.classList.add("d-none");
	subtitle.innerHTML= '';
	setResults.innerHTML='';
	cardResults.innerHTML='';
	setsFilterBar.classList.add("d-none");

}



function addToCollection(e){
	e = e || window.event;
	e = e.target || e.srcElement
	myCardCollection.push(e.id)
	cardId= document.getElementById(`${e.id}`);
	console.log('button was clicked');
	

}

function addToWishlist(e){
	e = e || window.event;
	e = e.target || e.srcElement
	myWishlist.push(e.id)
	cardId= document.getElementById(`${e.id}`);

}






function createCard(card){
	//console.log(card);
	id = card.id
	name = card.name;
	//name = name.replace(/\b[a-z]/g,c=>c.toUpperCase())
	name = name.toUpperCase()
	fname = card.fname 
	desc = card.desc
	type = card.type
	atk = card.atk
	def = card.def
	level = card.level
	race = card.race
	attribute = card.attribute
	link = card.link
	linkmarker = card.linkmarker
	linkvale = card.linkval
	scale = card.scale
	set = card.set
	archetype = card.archetype
	if (archetype == undefined){ archetype="-"}

	banlist_info = card.banlist
	misc_info = card.misc_info


	if (misc_info === undefined){
		releaseText="This card hasn't been released yet";
		
	} else { 
			if (misc_info[0].tcg_date == undefined){
			releaseText = `This card was released ${misc_info[0].ocg_date} in OCG but it's not available in TCG` 
		} if (misc_info[0].tcg_date !== undefined){
			releaseText=`This card was released ${misc_info[0].ocg_date} in OCG and ${misc_info[0].tcg_date} in TCG and it's available in these sets: `
			}
		if (misc_info[0].tcg_date == undefined && misc_info[0].ocg_date == undefined  ){
				releaseText="This card hasn't been released yet"
				}
		}

	// if (card.card_images === undefined) {cardImage="/img/noImage.jpg"} else{cardImage= card.card_images[0].image_url}
	if (card.card_images === undefined) {cardImage=`https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`} else{cardImage= card.card_images[0].image_url}
	// if (images===false) {cardImage="/img/dontLoadImages.jpg"}
	if (images===false) {cardImage=`https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`}
	card_prices= card.card_prices;
	
	card_sets= [card.card_sets];
/*
	console.log(card_sets.sort(function(a, b){
		var priceA=a.set_price, priceB=b.set_price
		if (priceA < priceB) //sort string ascending
			return -1 
		if (priceA > priceB)
			return 1
		return 0 //default return value (no sorting)
		}))
*/


	function sortCardSets(){

		card_sets.sort(function(a, b) {
			return parseFloat(a.set_price) - parseFloat(b.set_price);
		});
		console.log(card_sets)
		/*
		card_sets.sort(function(a, b){
		var priceA=a.set_price, priceB=b.set_price
		if (priceA < priceB) //sort string ascending
			return -1 
		if (priceA > priceB)
			return 1
		return 0 //default return value (no sorting)
		})
		*/
	}
	/*
	for (var n = 0; n = card_sets.length ; n++) {
	card_sets.sort((a, b) => {
		if (a[n].set_price < b[n].set_price)
		  return -1;
		if (a[n].set_price > b[n].set_price)
		  return 1;
		return 0;
	  })
	}
console.log(card_sets.sort((a, b) => {
	if (a.set_price < b.set_price)
	  return -1;
	if (a.set_price > b.set_price)
	  return 1;
	return 0;
  }))
	
	 */
	banlist_info = card.banlist_info
	// console.log(card_sets[0])
		
	//console.log(banlist_info)
	
	if (def=== undefined || def == null){
		def=' - '
	}
	if (atk=== undefined || atk == null){
		atk=' - '
	}
	if (attribute=== undefined){
		attribute=' - '
	}
	if (level === undefined){
		level = 'LINK -' + card.linkval
	}
		


	if (card_prices !== undefined){
		//cardPrice = ('Amazon price : '+ card_prices[0].amazon_price + '<br>CardMarket price : ' +  card_prices[0].cardmarket_price+ '<br>Ebay price : ' +  card_prices[0].ebay_price + '<br>TCGPlayer price : ' +   card_prices[0].tcgplayer_price +'<br>')
	} else { cardPrice = '' }	

	if (banlist_info == undefined ){
		banlist_info = "Unlimited";

	} 


	// if (banlist_info.ban_tcg !== undefined ){
	// 	banlist_info = banlist_info.ban_tcg;
	// } 

	// // if (banlist_info.ban_ocg !== undefined ){
	// 	banlist_info = banlist_info.ban_ocg;
	// } 

	
	// if (banlist_info.ban_goat !== undefined ){
	// 	banlist_info = banlist_info.ban_goat;
	// } 

	if (banlist == "tcg" ){
		banlist_info = banlist_info.ban_tcg;
		if (banlist_info == undefined ){
			banlist_info = "Unlimited";
	
		} 
	 } 

	if (banlist == "ocg" ){
		banlist_info = banlist_info.ban_ocg;
	} 

	
	if (banlist == "goat" ){
		banlist_info = banlist_info.ban_goat;
	} 


	//console.log(banlist_info)
	 //console.log(banlist)
	 
	if (type=='Spell Card'){
		attribute = 'SPELL'


		level= '-'
	}
	if (type == 'Trap Card'){
		attribute = 'TRAP'
		level= '-'
	}


	if (type == "Trap Card" || type == "Spell Card" ){

		cardResults.innerHTML+= `
		<div>
		
				<div class="card cards" class='showCardInfo' style="width: 100%;">
					<div class="cardGrid" >
						<img src="${cardImage}" class="card-img-bottom cardImages" id='${fname}' alt="${name}" >
						<div class='cardInfo'  id='${name}'>
						
							<h5>${name}</h5>
							<img src="/img/typeOfCard/${type}.jpg" style="width : 20px" class="card-img-bottom" alt="Race Icon"> ${type} / <img src="/img/race/${race}.png" style="width : 20px" class="card-img-bottom" alt="Race Icon"> ${race} / Archetype : <span onclick='cardArchetype(this.id)'> <a href="#" class='getByArchetype' id='${archetype}'>  ${archetype}  </a></span>  /  Card ID : ${id} <br>
					
				<ul>
				<li>${desc}</li>
				<li><b> Ban Status </b>: <img src="/img/${banlist_info}.png" style="width : 18px" class="card-img-bottom" alt="Ban Status"> ${banlist_info} </li>
				</ul>
				<p id="setsTitles"> ${releaseText}  </p>
				<table id="${id}" >
				<tr>
				<th>Set Name</th>
				<th>Rarity</th>
				<th>Code</th>
				<th>Price</th>
				</tr>
				</table>
				<br>
				<div id='prices'>
				
				</div>
			</div>
		</div>
	  		
		</div>
	</div>
		
	
	
	</div>
	
		`

	} else {
		
		let levelOrRankOrLink="level";

		if (type=="XYZ Monster" || type == "XYZ Pendulum Effect Monster"){ levelOrRankOrLink="rank"}

		if (type=="Link Monster"){ levelOrRankOrLink="link"}

		cardResults.innerHTML+= `
		<div>
		<div class="card cards" class='showCardInfo' style="width: 100%;">
		<div class="cardGrid" >
			<img src="${cardImage}" class="card-img-bottom cardImages" id='${fname}' alt="${name}" >
			<div class='cardInfo'  id='${name}'>
			
				<h5>${name}</h5>
				<img src="/img/typeOfCard/${type}.jpg" style="width : 20px" class="card-img-bottom" alt="Race Icon"> ${type} / <img src="/img/race/${race}.png" style="width : 20px" class="card-img-bottom" alt="Race Icon"> ${race} / <img src="/img/attribute/${attribute}.png" style="width : 20px" class="card-img-bottom" alt="Attribute Icon"> ${attribute} /  <img src="/img/${levelOrRankOrLink}.png" style="width : 20px" class="card-img-bottom" alt="Level Icon">  ${level} / Archetype : <span onclick='cardArchetype(this.id)'> <a href="#" class='getByArchetype' id='${archetype}'>  ${archetype}  </a></span>  /  Card ID : ${id} <br>
			
				<ul>
				<li>${desc}</li>
				<li><b> ATK </b>: <img src="/img/attack.png" style="width : 18px" class="card-img-bottom" alt="Atk Icon"> ${atk}</li>
				<li><b> DEF </b>: <img src="/img/defense.png" style="width : 18px" class="card-img-bottom" alt="Def Icon"> ${def} </li>
				<li><b> Ban Status </b>: <img src="/img/${banlist_info}.png" style="width : 18px" class="card-img-bottom" alt="Ban Status"> ${banlist_info} </li>
				</ul>
				<p id="${id}_setsTitles"> ${releaseText}</p>
				<table id="${id}" >
				<tr>
				<th>Set Name</th>
				<th>Rarity</th>
				<th>Code</th>
				<th>Price</th>
				</tr>
				</table>
				<br>
				<div id='prices'>
				</div>
			</div>
		</div>
	  	
		</div>
	</div>
		
	
	
	</div>
	
		`
	}
			
	
	
	

	if (card_sets[0] !== undefined ){

		
		//sortCardSets();

	card_sets.forEach(function(setName,i){

		for (var b = 0; b < card_sets[0].length ; b++) {
			
			set_code= setName[b].set_code;
			set_name= setName[b].set_name;
			set_price= setName[b].set_price;
			set_rarity= setName[b].set_rarity;
			//console.log(set_code)
		   document.getElementById(id).innerHTML+=`
		   <div onclick='addToCollection(this.id)' style='display:inline'>
			
		 


			<tr>
				<td><span onclick='cardSet(this.id)'>  <a id="${setName[b].set_name}" class='getBySet' href="#"> ${setName[b].set_name} </a></span>  </td>
				<td class="setRarity">  ${set_rarity}  </td>
				<td class="setCode"><span onclick='cardSet(this.id)'>  ${ setName[b].set_code}  </span>  </td> 
				<td class="setPrice"> $${setName[b].set_price}  </td>
				<td class="addButton"> 
				
				<form method="post" action="/addToCollection" style="display: inline">
				<input type="hidden" name="Archetype"  value="${archetype}">
				<input type="hidden" name="atk"  value="${atk}">
				<input type="hidden" name="attribute"  value="${attribute}">
				<input type="hidden" name="cardImage"  value="${cardImage}">
				<input type="hidden" name="def"  value="${def}">
				<input type="hidden" name="desc"  value="${desc}">
				<input type="hidden" name="id"  value="${id}">
				<input type="hidden" name="level"  value="${level}">
				<input type="hidden" name="name"  value="${name}">
				<input type="hidden" name="race"  value="${race}">
				<input type="hidden" name="type"  value="${type}">
				<input type="hidden" name="cardSetId"  value="${set_code}">
				<input type="hidden" name="cardSetName"  value="${set_name}">
				<input type="hidden" name="cardSetRarity"  value="${set_rarity}">
				<input type="submit" name="submit" value="Collection" style="display: inline" >
				</form>

			</tr>
					
			

			
			
			
			





		   </div>
		  `
		  $(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip();   
		  })
		}

	 })} else {
		
		 document.getElementById(id).innerHTML = " ";
		 //document.getElementById(`${id}_setsTitles`).innerHTML=" ";
		 document.getElementById(id).innerHTML+=` `
		}





		
}


function createSet(set,b){
	
	var visibleSet = Object.values(set)
	setCode = visibleSet [1]
	setQuantity = visibleSet[2]
	setName = visibleSet[0]
	setImage = "img/noimage.jpg"
	setResults.innerHTML+= 
	`
	<div class="sets" id='${setName}'>
	<div class="setGrid" >
		<div class='cardInfo'>
		<span onclick='cardSet(this.id)'><h5>  <a id="${setName}" class='getBySet' href="#"> ${setName} </a> <br> ${setQuantity} cards in this set // Set Code ${setCode}  </h5></span> 
		</div>
	  
	</div>
	</div>
	
	`;



		
}
function createArchetype(set,b){
	
	var visibleSet = Object.values(set)
	setQuantity = visibleSet [1]
	archetype = visibleSet[0]
	setImage = "img/noimage.jpg"
	setResults.innerHTML+= 
	`
	<div class="archetype" id='${archetype}'>
	<div class="archetypeGrid" >
		<div class='cardInfo'>
		<span onclick='cardArchetype(this.id)'><h5>  <a id="${archetype}" class='getBySet' href="#"> ${archetype} </a> </h5></span> 
		</div>
	  
	</div>
	</div>
	
	`;



		
}






// <h5>Set Name : <span onclick='cardSet(this.id)'> <a href="#" class='getBySet'>${setName}</a></span> <br> ${setQuantity} cards in this set</h5>