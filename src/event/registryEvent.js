
import appendNumber, { showNumber } from "../page/appendNumber"
import CreateNumber from "../utils/createNumber"


let isRunning = false
const createNumber = new CreateNumber(500)



createNumber.onNumberCreated = (number, isPrime)=>{
  appendNumber(number, isPrime)
  showNumber(number)
}

window.addEventListener('click',()=>{
  if(isRunning){
    createNumber.stop()
    isRunning = false
  }else{
    createNumber.start()
    isRunning = true
  }

})

