export default function createRandomColor(){
  

  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

function randomNumber(){
  return Math.floor(Math.random()*(255-0+1)+0)
}