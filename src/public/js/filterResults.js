let filterBarSettings = document.getElementById("advancedSearchBar")
let monsterFilterSettings = document.getElementById("monsterFilters")
let spellFilterSettings = document.getElementById("spellFilters")
let trapFilterSettings = document.getElementById("trapFilters")

var filterAll = document.querySelector("input[id=All]");
var filterMonster = document.querySelector("input[id=Monster]");
var filterSpell = document.querySelector("input[id=SpellCard]");
var filterTrap = document.querySelector("input[id=TrapCard]");
var raceParameter ; 
var levelParameter;
var AttributeParameter;

var monsterCardType = undefined ;
var levelOfCard = undefined; 
var raceOfMonsterCard = undefined;
var attributeOfMonsterCard = undefined ;
var raceOfSpellCard = undefined;
var raceOfTrapCard = undefined;
var atkParameter=undefined;
var defParameter=undefined;



banlist = "tcg";
var moreFilteredResults

var typeParameter="All"


Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

Array.prototype.sortByInverted = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
  });
}

function sortByInverted(parameter){
  
  clearScreen()
  fetchRandom=false;
  newCards = false;
 

  sortedResultsInverted = results.sortByInverted(parameter)
     //CREATING THE CARDS

     function createSortedByInvertedCards(){
      subtitle.innerHTML= `Card Results ${sortedResultsInverted.length} cards : `
      for (var b = 0; b < resultsPerPage ; b++) {
        createCard(sortedResultsInverted[b])}
    }  
    
    createSortedByInvertedCards()
    
}

function sortBy(parameter){ 

  clearScreen()
  if (pathname == "/advancedSearch.html"){
    advancedSearchBar.classList.remove("d-none");
}

  sortedResults = results.sortBy(parameter)
  //CREATING THE CARDS

  function createSortedByInvertedCards(){
   subtitle.innerHTML= `Card Results ${sortedResults.length} cards : `
   for (var b = 0; b < resultsPerPage ; b++) {
     createCard(sortedResults[b])}
 }  
 
 createSortedByInvertedCards()
 
}



let descForm = (document.getElementById("descForm").value)

function resultsDescToLowerCase(){

for (b = 0; !(b > results.length); b++) {
  //console.log((results[b].desc).toLowerCase())
  
    }
      
    } 

    
$('#descForm').on('input', function() { 
  // Your code here
  let searchCryteria = (this.value)
});



filterAll.addEventListener( 'change', function() {
  if(this.checked) {
      // radio is checked..
      
      typeParameter="All"
      spellFilterSettings.innerHTML=``;
      trapFilterSettings.innerHTML=``;
      monsterFilterSettings.innerHTML=``;
  } else {
         // radio is not checked..
      spellFilterSettings.innerHTML=``;
      trapFilterSettings.innerHTML=``;
      monsterFilterSettings.innerHTML=``;
         typeParameter = undefined;
      }
});


filterSpell.addEventListener( 'change', function() {
  if(this.checked) {
      // radio is checked..
      
      typeParameter="Spell Card"
      console.log("its a spell " +typeParameter)
      spellFilterSettings.innerHTML=``;
      trapFilterSettings.innerHTML=``;
      monsterFilterSettings.innerHTML=``;

      spellFilterSettings.innerHTML=`
      <form>
          <div id="typeOfSpell">
          <label class="mr-sm-2" for="inlineFormCustomSelect">Type of Spell</label><br>
          <div class="form-check form-check-inline">
          <input class="form-check-input raceOfSpell" type="radio" name="inlineRadioOptions" id="NormalSpell" value="Normal">
          <label class="form-check-label" for="NormalSpell"><img src="/img/race/Normal.png" for="NormalSpell"> Normal </label>
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input raceOfSpell" type="radio" name="inlineRadioOptions" id="ContinuousSpell" value="Continuous">
          <label class="form-check-label" for="ContinuousSpell"> <img src="/img/race/Continuous.png" for="ContinuousSpell"> Continuous</label>
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input raceOfSpell" type="radio" name="inlineRadioOptions" id="Field" value="Field">
          <label class="form-check-label" for="Field"> <img src="/img/race/Field.png" for="Field"> Field</label>
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input raceOfSpell" type="radio" name="inlineRadioOptions" id="Quick-Play" value="Quick-Play">
          <label class="form-check-label" for="Quick-Play"><img src="/img/race/Quick-Play.png" for="Quick-Play"> Quick-Play  </label>
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input raceOfSpell" type="radio" name="inlineRadioOptions" id="Ritual" value="Ritual">
          <label class="form-check-label" for="Ritual"><img src="/img/race/Ritual.png" for="Ritual"> Ritual  </label>
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input raceOfSpell" type="radio" name="inlineRadioOptions" id="Equip" value="Equip">
          <label class="form-check-label" for="Equip"><img src="/img/race/Equip.png" for="Equip"> Equip </label>
          </div>
      </div>
      </form>
      `
  } else {
         // radio is not checked..
      spellFilterSettings.innerHTML=``;
      trapFilterSettings.innerHTML=``;
      monsterFilterSettings.innerHTML=``;
         typeParameter = undefined;
      }
});

filterTrap.addEventListener( 'change', function() {
    if(this.checked) {
        // radio is checked..
        
        typeParameter="Trap Card"

        console.log("its a trap " +typeParameter)
        spellFilterSettings.innerHTML=``;
        trapFilterSettings.innerHTML=``;
        monsterFilterSettings.innerHTML=``;
        
        trapFilterSettings.innerHTML=`
        <form>   
            <div id="typeOfTrap">
            <label class="mr-sm-2" for="inlineFormCustomSelect">Type of Trap</label><br>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfTrap" type="radio" name="inlineRadioOptions" id="NormalTrap" value="Normal">
            <label class="form-check-label" for="NormalTrap"> <img src="/img/race/Normal.png" for="NormalTrap" > Normal</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfTrap" type="radio" name="inlineRadioOptions" id="ContinuousTrap" value="Continuous">
            <label class="form-check-label" for="ContinuousTrap"><img src="/img/race/Continuous.png" for="ContinuousTrap"> Continuous </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfTrap" type="radio" name="inlineRadioOptions" id="Counter" value="Counter">
            <label class="form-check-label" for="Counter"><img src="/img/race/Counter.png" for="Counter"> Counter </label>
            </div>
            </div>
        </form>
        `
        
    } else {
        // radio is not checked..
        
        spellFilterSettings.innerHTML=``;
        trapFilterSettings.innerHTML=``;
        monsterFilterSettings.innerHTML=``;

        typeParameter = undefined;
   }
});

filterMonster.addEventListener( 'change', function() {
    if(this.checked) {
        // radio is checked..
        
        typeParameter = "Monster";



        spellFilterSettings.innerHTML=``;
        trapFilterSettings.innerHTML=``;
        monsterFilterSettings.innerHTML=``;

        monsterFilterSettings.innerHTML=`
              <form>
                <div id="type">
                <label class="mr-sm-2" for="inlineFormCustomSelect">TYPE</label><br>
                
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Normal Monster" id="NormalMonster" >
                <label class="form-check-label" for="NormalMonster"><img src="/img/typeOfCard/Normal Monster.jpg" for="NormalMonster"> Normal Monster </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Normal Tuner Monster" id="NormalTunerMonster" >
                <label class="form-check-label" for="NormalTunerMonster"><img src="/img/typeOfCard/Normal Tuner Monster.jpg" for="NormalTunerMonster"> Normal Tuner Monster </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions"  value="Effect Monster" id="EffectMonster" >
                <label class="form-check-label" for="EffectMonster"><img src="/img/typeOfCard/Effect Monster.jpg" for="EffectMonster"> Effect Monster </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Flip Effect Monster" id="FlipEffectMonster">
                <label class="form-check-label" for="FlipEffectMonster"><img src="/img/typeOfCard/Flip Effect Monster.jpg" for="FlipEffectMonster"> Flip </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions"  value="Gemini Monster" id="GeminiMonster">
                <label class="form-check-label" for="GeminiMonster"><img src="/img/typeOfCard/Gemini Monster.jpg" for="GeminiMonster"> Gemini</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Tuner Monster" id="TunerMonster">
                <label class="form-check-label" for="TunerMonster"><img src="/img/typeOfCard/Tuner Monster.jpg" for="TunerMonster"> Tuner</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions"value="Union Effect Monster" id="UnionEffectMonster" >
                <label class="form-check-label" for="UnionEffectMonster"><img src="/img/typeOfCard/Union Effect Monster.jpg" for="UnionEffectMonster"> Union </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Spirit Monster" id="SpiritMonster" >
                <label class="form-check-label" for="SpiritMonster"><img src="/img/typeOfCard/Spirit Monster.jpg" for="SpiritMonster"> Spirit </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Toon Monster" id="ToonMonster" >
                <label class="form-check-label" for="ToonMonster"><img src="/img/typeOfCard/Toon Monster.jpg" for="ToonMonster"> Toon </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Pendulum Normal Monster" id="PendulumNormalMonster">
                <label class="form-check-label" for="PendulumNormalMonster"><img src="/img/typeOfCard/Pendulum Normal Monster.jpg" for="PendulumNormalMonster"> Pendulum Normal </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions"value="Pendulum Effect Monster" id="PendulumEffectMonster">
                <label class="form-check-label" for="PendulumEffectMonster"><img src="/img/typeOfCard/Pendulum Effect Monster.jpg" for="PendulumEffectMonster"> Pendulum Effect</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Pendulum Tuner Effect Monster" id="PendulumTunerEffectMonster">
                <label class="form-check-label" for="PendulumTunerEffectMonster"><img src="/img/typeOfCard/Pendulum Tuner Monster.jpg" for="PendulumTunerEffectMonster"> Pendulum Tuner </label>
                </div>

                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Ritual Monster" id="RitualMonster">
                <label class="form-check-label" for="RitualMonster"><img src="/img/typeOfCard/Ritual Monster.jpg" for="RitualMonster"> Ritual</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Fusion Monster" id="FusionMonster">
                <label class="form-check-label" for="FusionMonster"><img src="/img/typeOfCard/Fusion Monster.jpg" for="FusionMonster"> Fusion </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions"  value="Pendulum Effect Fusion Monster" id="PendulumEffectFusionMonster">
                <label class="form-check-label" for="PendulumEffectFusionMonster"><img src="/img/typeOfCard/Pendulum Effect Fusion Monster.jpg" for="PendulumEffectFusionMonster"> Pendulum Fusion </label>
                </div> 
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="XYZ Monster" id="XYZMonster">
                <label class="form-check-label" for="XYZMonster"><img src="/img/typeOfCard/XYZ Monster.jpg" for="XYZMonster"> XYZ </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="XYZ Pendulum Effect Monster" id="XYZPendulumEffectMonster">
                <label class="form-check-label" for="XYZPendulumEffectMonster"><img src="/img/typeOfCard/XYZ Pendulum Effect Monster.jpg" for="XYZPendulumEffectMonster"> XYZ Pendulum  </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Synchro Monster" id="SynchroMonster" >
                <label class="form-check-label" for="SynchroMonster"><img src="/img/typeOfCard/Synchro Monster.jpg" for="SynchroMonster"> Synchro </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Synchro Tuner Monster" id="SynchroTunerMonster" >
                <label class="form-check-label" for="SynchroTunerMonster"><img src="/img/typeOfCard/Synchro Tuner Monster.jpg" for="SynchroTunerMonster"> Synchro Tuner</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Synchro Pendulum Effect Monster" id="SynchroPendulumEffectMonster" >
                <label class="form-check-label" for="SynchroPendulumEffectMonster"><img src="/img/typeOfCard/Synchro Pendulum Effect Monster.jpg" for="SynchroPendulumEffectMonster"> Synchro Pendulum  </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions" value="Link Monster" id="LinkMonster">
                <label class="form-check-label" for="LinkMonster"><img src="/img/typeOfCard/Link Monster.jpg" for="LinkMonster"> Link </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input typeOfMonsterCard" type="radio" name="inlineRadioOptions"value="Token" id="Token">
                <label class="form-check-label" for="Token"><img src="/img/typeOfCard/Token.jpg" for="Token"> Token </label>
                </div>
                </div>
              </form>
              <form>
                <div id="levels">
                <label class="mr-sm-2" for="inlineFormCustomSelect">LEVEL OR RANK</label><br>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level1" value="1">
                  <label class="form-check-label" for="level1">1 <img src="/img/level.png" for="level1"></label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level2" value="2">
                  <label class="form-check-label" for="level2">2 <img src="/img/level.png" for="level2"></label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level3" value="3">
                  <label class="form-check-label" for="level3">3 <img src="/img/level.png" for="level3"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level4" value="4">
                  <label class="form-check-label" for="level4">4 <img src="/img/level.png" for="level4"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level5" value="5">
                  <label class="form-check-label" for="level5">5 <img src="/img/level.png" for="level5"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level6" value="6">
                  <label class="form-check-label" for="level6">6 <img src="/img/level.png" for="level6"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level7" value="7">
                  <label class="form-check-label" for="level7">7 <img src="/img/level.png" for="level7"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level8" value="8">
                  <label class="form-check-label" for="level8">8 <img src="/img/level.png" for="level8"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level9" value="9">
                  <label class="form-check-label" for="level9">9 <img src="/img/level.png" for="level9"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level10" value="10">
                  <label class="form-check-label" for="level10">10 <img src="/img/level.png" for="level10"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level11" value="11">
                  <label class="form-check-label" for="level11">11 <img src="/img/level.png" for="level11"> </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input levelOfCard" type="radio" name="inlineRadioOptions" id="level12" value="12">
                  <label class="form-check-label" for="level12">12 <img src="/img/level.png" for="level12"> </label>
                </div>
                </div>
          </form>
          <form>
        <div id="race">
            <label class="mr-sm-2" for="inlineFormCustomSelect">Race</label><br>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Aqua" value="Aqua">
            <label class="form-check-label" for="Aqua"><img src="/img/race/Aqua.png" for="Aqua"> Aqua </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Beast" value="Beast">
            <label class="form-check-label" for="Beast"><img src="/img/race/Beast.png" for="Beast"> Beast </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Beast-Warrior" value="Beast-Warrior">
            <label class="form-check-label" for="Beast-Warrior"><img src="/img/race/Beast-Warrior.png" for="Beast-Warrior"> Beast-Warrior </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Creator-God" value="Creator-God">
            <label class="form-check-label" for="Creator-God"><img src="/img/race/Divine-Beast.png" for="Creator-God"> Creator-God </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Cyberse" value="Cyberse">
            <label class="form-check-label" for="Cyberse"><img src="/img/race/Cyberse.png" for="Cyberse"> Cyberse </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Dinosaur" value="Dinosaur">
            <label class="form-check-label" for="Dinosaur"><img src="/img/race/Dinosaur.png" for="Dinosaur"> Dinosaur </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Divine-Beast" value="Divine-Beast">
            <label class="form-check-label" for="Divine-Beast"><img src="/img/race/Divine-Beast.png" for="Divine-Beast"> Divine-Beast </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Dragon" value="Dragon">
            <label class="form-check-label" for="Dragon"><img src="/img/race/Dragon.png" for="Dragon"> Dragon </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Fairy" value="Fairy">
            <label class="form-check-label" for="Fairy"><img src="/img/race/Fairy.png" for="Fairy"> Fairy </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Fiend" value="Fiend">
            <label class="form-check-label" for="Fiend"><img src="/img/race/Fiend.png" for="Fiend"> Fiend </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Fish" value="Fish">
            <label class="form-check-label" for="Fish"><img src="/img/race/Fish.png" for="Fish"> Fish </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Insect" value="Insect">
            <label class="form-check-label" for="Insect"><img src="/img/race/Insect.png" for="Insect"> Insect </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Machine" value="Machine">
            <label class="form-check-label" for="Machine"><img src="/img/race/Machine.png" for="Machine"> Machine </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Plant" value="Plant">
            <label class="form-check-label" for="Plant"><img src="/img/race/Plant.png" for="Plant"> Plant </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Psychic" value="Psychic">
            <label class="form-check-label" for="Psychic"><img src="/img/race/Psychic.png" for="Psychic"> Psychic</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Pyro" value="Pyro">
            <label class="form-check-label" for="Pyro"><img src="/img/race/Pyro.png" for="Pyro"> Pyro </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Reptile" value="Reptile">
            <label class="form-check-label" for="Reptile"><img src="/img/race/Reptile.png" for="Reptile"> Reptile </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Rock" value="Rock">
            <label class="form-check-label" for="Rock"><img src="/img/race/Rock.png" for="Rock"> Rock </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="SeaSerpent" value="Sea Serpent">
            <label class="form-check-label" for="SeaSerpent"><img src="/img/race/Sea Serpent.png" for="SeaSerpent"> Sea Serpent </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Spellcaster" value="Spellcaster">
            <label class="form-check-label" for="Spellcaster"><img src="/img/race/Spellcaster.png" for="Spellcaster"> Spellcaster </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Thunder" value="Thunder">
            <label class="form-check-label" for="Thunder"><img src="/img/race/Thunder.png" for="Thunder"> Thunder </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Warrior" value="Warrior">
            <label class="form-check-label" for="Warrior"><img src="/img/race/Warrior.png" for="Warrior"> Warrior </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="WingedBeast" value="Winged Beast">
            <label class="form-check-label" for="WingedBeast"><img src="/img/race/Winged Beast.png" for="WingedBeast"> Winged Beast </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Wyrm" value="Wyrm">
            <label class="form-check-label" for="Wyrm"><img src="/img/race/Wyrm.png" for="Wyrm"> Wyrm </label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input raceOfMonsterCard" type="radio" name="inlineRadioOptions" id="Zombie" value="Zombie">
            <label class="form-check-label" for="Zombie"><img src="/img/race/Zombie.png" for="Zombie"> Zombie </label>
            </div>
        </div>
        </form>

        <form>
        <div id="attribute">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Attribute</label><br>
        <div class="form-check form-check-inline">
        <input class="form-check-input attributeOfMonsterCard" type="radio" name="DARK" id="DARK" value="DARK">
        <label class="form-check-label" for="DARK"><img src="/img/attribute/DARK.png" for="DARK"> DARK </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input attributeOfMonsterCard" type="radio" name="DIVINE" id="DIVINE" value="DIVINE">
        <label class="form-check-label" for="DIVINE"><img src="/img/attribute/DIVINE.png" for="DIVINE"> DIVINE </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input attributeOfMonsterCard" type="radio" name="inlineRadioOptions" id="EARTH" value="EARTH">
        <label class="form-check-label" for="EARTH"><img src="/img/attribute/EARTH.png" for="EARTH"> EARTH </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input attributeOfMonsterCard" type="radio" name="inlineRadioOptions" id="FIRE" value="FIRE">
        <label class="form-check-label" for="FIRE"><img src="/img/attribute/FIRE.png" for="FIRE"> FIRE </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input attributeOfMonsterCard" type="radio" name="inlineRadioOptions" id="LIGHT" value="LIGHT">
        <label class="form-check-label" for="LIGHT"><img src="/img/attribute/LIGHT.png" for="LIGHT"> LIGHT </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input attributeOfMonsterCard" type="radio" name="inlineRadioOptions" id="WATER" value="WATER">
        <label class="form-check-label" for="WATER"><img src="/img/attribute/WATER.png" for="WATER"> WATER </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input attributeOfMonsterCard" type="radio" name="inlineRadioOptions" id="WIND" value="WIND">
        <label class="form-check-label" for="WIND"><img src="/img/attribute/WIND.png" for="WIND"> WIND </label>
        </div>
    </div>
    <form>

    
    <div class="row">
      <div class="col-auto atk" id="atk">
          <label for="atk">ATTACK</label>
          <input type="text" class="form-control mb-2" id="atkForm" placeholder="ATK">
      </div>

      <div class="col-auto def" id="def">
          <label for="def">DEFENSE</label>
          <input type="text" class="form-control mb-2" id="defForm" placeholder="DEF">
      </div>
    </div>


        `
    } else {
        // radio is not checked..
        
        spellFilterSettings.innerHTML=``;
        trapFilterSettings.innerHTML=``;
        monsterFilterSettings.innerHTML=``;

         typeParameter = undefined;
    }
});





//document.getElementById("SpellCard").value

//FILTER RESULTS FILTRARA EN BASE AL TIPO DE CARTA QUE SE PONGA ACA


function filterResults(){

      clearScreen()
      newCards=false
      fetchRandom=false
      moreFilteredResults =true;

      advancedSearchBar.classList.remove("d-none");

  //AGREGAR BOTON
  moreFilteredCardsButton.classList.remove("d-none");


//FILTER BY DESCRIPTION
if ((document.getElementById("descForm").value) != undefined){
  function filterByDescription(){
    return (filteredResults= (results.data.filter(function(card){
      return ((card.desc).includes(document.getElementById("descForm").value) || (card.name).includes(document.getElementById("descForm").value))
    
    })))
      }
  filterByDescription()
  //console.log(filteredResults)
} 


  //CREATING THE CARDS
  if (typeParameter == "All"){
  subtitle.innerHTML= `Card Results ${filteredResults.length} cards : `
  for (var b = 0; b < resultsPerPage ; b++) {
  createCard(filteredResults[b])}
  return
   }


//FILTER BY PARAMETER

  if (typeParameter != undefined){
    //ITS A MONSTER? 
    if (typeParameter == "Monster"){
      console.log("it's a monster!")
      function filterByMonsterType(){
        console.log("filterByMonsterType running")
        return (filteredResults= (filteredResults.filter(function(card){return (card.type).includes("Monster")})))
          }
        
      //console.log(filteredResults)

      //FILTER BY TYPE OF MONSTER CARD (PENDULUM, SYNCHRO; NORMAL; XYZ; ETC)
 
      function filterByMonsterCardType(){
        
        console.log("filterByMonsterCardType running")
        return (filteredResults= (filteredResults.filter(function(card){return (card.type == monsterCardType)})))
          }
      
        if (monsterCardType == undefined){filterByMonsterType()} 
         
        if (document.querySelector('.typeOfMonsterCard:checked')){
          monsterCardType = document.querySelector('.typeOfMonsterCard:checked').value;
                    
          if (monsterCardType=="Ritual Monster"){
            function filterByRitualMonsterType(){
              return (filteredResults= (filteredResults.filter(function(card){return (card.type).includes("Ritual")})))
                }
                filterByRitualMonsterType()
                console.log("its a ritual")
              }  
              
              // if (monsterCardType != "Ritual Monster"){
              // filterByMonsterCardType();
              //       }
                    
                   

        if (monsterCardType=="Tuner Monster") {
              function filterByTunerMonsterType(){
                return (filteredResults= (filteredResults.filter(function(card){return (card.type).includes("Tuner")})))
                  }
                  filterByTunerMonsterType()
                  console.log("its a tuner")
                }  
                
                if (monsterCardType !="Ritual Monster" && monsterCardType != "Tuner Monster"){
                filterByMonsterCardType();
                      }
                      
              }



// FILTER BY Level 
function filterByLevelOfCard(){
  console.log("filterByLevelOfCard ok "+ levelOfCard)
    return (filteredResults= (filteredResults.filter(function(card){return (card.level == levelOfCard)})))
      }
      if (document.querySelector('.levelOfCard:checked') ){
        levelOfCard = document.querySelector('.levelOfCard:checked').value;
        filterByLevelOfCard()};
    
  // FILTER BY ATTRIBUTE 
  
  if (document.querySelector('.attributeOfMonsterCard:checked')){
    
    console.log("filterByAttribute running")
    attributeOfMonsterCard = document.querySelector('.attributeOfMonsterCard:checked').value;
    filterByAttributeMonsterOfCard()};
  
  function filterByAttributeMonsterOfCard(){
  
  return (filteredResults= (filteredResults.filter(function(card){return (card.attribute == attributeOfMonsterCard)})))
    }
  
  
  
  
       //FILTER BY ATK
  
  
       if ((document.getElementById("atkForm").value) != "" && !(document.getElementById("defForm").value)){
                  
        console.log("filterByaTK running")
        atkParameter = document.getElementById("atkForm").value
        function filterByAtk(){
            return (filteredResults= (results.data.filter(function(card){return (card.atk ==atkParameter)})))
                }
                filterByAtk()
    } 
        
          //FILTER BY DEF
        
        
        if ((document.getElementById("defForm").value) != "" && !(document.getElementById("atkForm").value)){
                    
        console.log("filterByDef running")
                defParameter = document.getElementById("defForm").value
                function filterByDef(){
                    return (filteredResults= (results.data.filter(function(card){return (card.def ==defParameter)})))
                        }
                        filterByDef()
            } 
  
          
          // FILTER BY ATK & DEF - CURRENTLY NOT WORKING
          
            if ((document.getElementById("defForm").value) != "" && (document.getElementById("atkForm").value) != ""){


              defParameter = document.getElementById("defForm").value
              function filterByDef(){
                  return (filteredResults= (results.data.filter(function(card){return (card.def ==defParameter)})))
                      }
                      filterByDef()
              
              atkParameter = document.getElementById("atkForm").value
              function filterByAtk(){
                  return (filteredResults= (results.data.filter(function(card){return (card.atk ==atkParameter)})))
                      }
                filterByAtk()


             }

          
          // FILTER BY RACE 
          
          if (document.querySelector('.raceOfMonsterCard:checked') ){
            
        console.log("filterByrace running")
            raceOfMonsterCard = document.querySelector('.raceOfMonsterCard:checked').value;
          
            function filterByRaceMonsterOfCard(){
              return (filteredResults= (filteredResults.filter(function(card){return (card.race == raceOfMonsterCard)})))
                }
          
            filterByRaceMonsterOfCard()};
          
          } //END OF MONSTER TYPE CARD


    //ITS A MAGIC OR TRAP? 
    if (typeParameter == "Spell Card" || typeParameter == "Trap Card"){
        function filterByType(){
          return (filteredResults= (filteredResults.filter(function(card){return (card.type == typeParameter)})))
        } 
      filterByType()

      
     if (document.querySelector('.raceOfSpell:checked') ){
    raceOfSpellCard = document.querySelector('.raceOfSpell:checked').value;
  
        function filterByRaceOfSpellCard(){
          return (filteredResults= (filteredResults.filter(function(card){return (card.race == raceOfSpellCard)})))
            }
      
        filterByRaceOfSpellCard()};
  
  

    if (document.querySelector('.raceOfTrap:checked') ){
      raceOfTrapCard = document.querySelector('.raceOfTrap:checked').value;
    
      function filterByRaceOfTrapCard(){
        return (filteredResults= (filteredResults.filter(function(card){return (card.race == raceOfTrapCard)})))
          }
    
          filterByRaceOfTrapCard()};
    
    

        } 
    

      

    //RESULTS TO SHOW
  // console.log(filteredResults)




   //CREATING THE CARDS

  function createFilteredCards(){


  subtitle.innerHTML= `${filteredResults.length} cards matching your description : `
  for (var b = 0; b < resultsPerPage ; b++) {
    createCard(filteredResults[b])}
  }
}




  
advancedSearchBar.classList.remove("d-none");

createFilteredCards()



}


///////////////////////////////////////////////////////////////////////////////////

  
function getMoreFilteredCards(){
   	
        
  var moreResults = loadedcards+30;
  for (b = loadedcards; b < moreResults ; b++) {
      if (b >= filteredResults.length){
          console.log('No more cards!');
          moreFilteredCardsButton.classList.add("d-none");
          return} 
      else {
      createCard(filteredResults[b])
      loadedcards++
      }
  }
  
}


/*
id
name
Type: Tipo de carta
desc : efecto
atk
def
level
race
attribute
archetype


Type
    Monstruos: 
        Effect Monster
        Union Effect Monster
        Normal Monster
        Spirit Monster
        Pendulum Normal Monster
        Pendulum Effect Monster
        Pendulum Tuner Effect Monster
        Tuner Monster
        Flip Effect Monster
        Token
        Ritual Monster
        Gemini Monster

    Extra Deck :
        Fusion Monster
        Pendulum Effect Fusion Monster
        XYZ Monster
        XYZ Pendulum Effect Monster
        Synchro Monster
        Synchro Pendulum Effect Monster
        Link Monster

    Magias & Trampas:
        Spell Card
        Trap Card


Race 

    Monstruos:
        Aqua
        Beast
        Beast-Warrior
        Creator God
        Cyberse
        Dinosaur
        Divine-Beast
        Dragon
        Fairy
        Fiend
        Fish
        Insect
        Machine
        Plant
        Psychic
        Pyro
        Reptile
        Rock
        Sea Serpent
        Spellcaster
        Thunder
        Warrior
        Winged Beast
        Wyrm
        Zombie
        
    Magias:
        Normal
        Continuous
        Field
        Quick-Play
        Ritual
        Equip
    
    Trampas:
        Normal
        Continuous
        Counter

        */