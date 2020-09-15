var display1 = document.getElementById('screen1')
var display2 = document.getElementById('screen2')
var result
var clickedCounter
var mathOperator
var currentValue

resetCalculator()

    function resetCalculator(){
      display1.value = 8000
      display2.value = 8000
     
      result = 8000;
      secondOperand =0
      clickedCounter = 0
      clickedDisplay='screen1'
      mathOperator=undefined;
    
    }

     function choosePlayerPoints(e){
            e = e || window.event;
            e = e.target || e.srcElement
            clickedDisplay = e.id
            currentScreenNumber = e.value
            console.log("Current Screen "+clickedDisplay)
            console.log(currentScreenNumber)
        }
        

        
        // switch(clickedDisplay){
        //   case "screen1":
        //     console.log("CurrentScreen 1aaaaaaaaaaaaa")
        //     display1.value = currentScreenNumber
        //     break;
        //   case "screen2":
        //     console.log("CurrentScreen 2aaaaaaaaaaaaa")
        //     display2.value = currentScreenNumber
        //     break; 
        //     }

    

          
    function updateDisplay(clickedDisplay) {

        if (clickedDisplay == 'screen1' ){
          console.log("CurrentScreen 1")
          currentValue=display1.value
          display1.value = result
            } 

        if (clickedDisplay == 'screen2' )   { 
          console.log("CurrentScreen 2")
          
          currentValue=display2.value
          display2.value = result
            }

       

        
      }

          const keys = document.querySelector('.calculator-keys');
          keys.addEventListener('click', (event) => {
            const { target } = event;

            if (target.value !== "+" && target.value !== "-" && target.value !== "*" && target.value !== "/" && target.value !== "="){
              secondOperand += target.value
              console.log(target.value)
            }

            if (target.value == "reset"){
            resetCalculator()
            }

            if (target.value == "00" || target.value == "0" || target.value == "1" || target.value == "2" || target.value == "3"  || target.value == "4"  || target.value == "5"  || target.value == "6"  || target.value == "7"  || target.value == "8"  || target.value == "9" ){
              // secondOperand += Number(target.value)
              
              console.log(Number(secondOperand))
              result = Number(secondOperand)
              updateDisplay(clickedDisplay)
            }

            if ((target.value == "+" && target.value !== "=")||(target.value == "-" && target.value !== "=")||(target.value == "*" && target.value !== "=")||(target.value == "/" && target.value !== "=")){
              mathOperator = target.value
              clickedCounter=0
              console.log(mathOperator)
            }

           

            function resolver(){
              switch(mathOperator){
                case "+":
                  console.log('MathOperator = '+mathOperator)
                  reDoPrevious = {
                    lastResult : Number(currentScreenNumber) + Number(secondOperand),
                    lastOperand : Number(secondOperand),
                    lastOperator : mathOperator}

                  result = Number(currentScreenNumber) + Number(secondOperand);
                  console.log(result)
                  break;
                case "-":
                  console.log('MathOperator = '+mathOperator)                  
                  reDoPrevious = {
                    lastResult : Number(currentScreenNumber) - Number(secondOperand),
                    lastOperand : Number(secondOperand),
                    lastOperator : mathOperator}

                  result = Number(currentScreenNumber) - Number(secondOperand);
                  console.log(result)
                    break;
                case "*":
                  console.log('MathOperator = '+mathOperator)                  
                  reDoPrevious = {
                    lastResult :Number(currentScreenNumber) * 2,
                    lastOperator : mathOperator}

                  result = Number(currentScreenNumber) * 2;
                  console.log(result)
                  break;
                case "/":
                  console.log('MathOperator = '+mathOperator)
                  reDoPrevious = {
                    lastResult :Number(lastResult) / 2,
                    lastOperator : mathOperator}

                  result = Number(currentScreenNumber) / 2;
                  console.log(result)
                  break;
                  
              }

             
            }

            if(target.value == "="){
              clickedCounter++
              
              console.log('clickedCounter Hit '+clickedCounter)

              if (clickedCounter==2){
                console.log('entered if clickedCounter>=2 '+clickedCounter)
                function reDo(){
                  switch(reDoPrevious.lastOperator){
                    case "+":
                      console.log('MathOperator = '+mathOperator) 
                    
                      result = Number(currentValue) + Number(reDoPrevious.lastOperand);
                      console.log(result)
                      clickedCounter=1
                      break;
                    case "-":
                      console.log('MathOperator = '+mathOperator)    
                   
                      result = Number(currentValue) - Number(reDoPrevious.lastOperand);
                      console.log(result)
                      clickedCounter=1
                        break;
                    case "*":
                      console.log('MathOperator = '+mathOperator)                  
                      result = Number(reDoPrevious.lastResult) * 2;
                      console.log(result)
                      clickedCounter=1
                      break;
                    case "/":
                      console.log('MathOperator = '+mathOperator)
                      result = Number(reDoPrevious.lastResult) / 2;
                      console.log(result)
                      clickedCounter=1
                      break;
                      
                  } }
                  reDo()
                  updateDisplay(clickedDisplay)
              } else {
                resolver()
              updateDisplay(clickedDisplay)
            }
            }

          
          })
      // CALCULATOR DISPLAY 2
      