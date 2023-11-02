import isPrime from "./isPrime"

export default class CreateNumber{

  constructor(duration=500){
    this.duration = duration
    this.currentNumber = 1
    this.timer = null
    this.onNumberCreated=null
  }

  start(){
    if(this.timer){
      return
    }
    this.timer = setInterval(()=>{
      this.onNumberCreated && this.onNumberCreated(this.currentNumber, isPrime(this.currentNumber))
      this.currentNumber++
    },this.duration)
  }

  stop(){
    clearInterval(this.timer)
    this.timer = null
  }
}