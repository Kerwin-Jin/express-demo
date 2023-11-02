import createRandomColor from "../utils/randomColor"

const listWrap = document.querySelector("#app .list-wrap")
const numberWrap = document.querySelector("#app .number-wrap")

export default function appendNumber(n, isPrime){
  const spanEle = document.createElement('span')

  spanEle.innerText = n
  if(isPrime){
    const randomColor = createRandomColor()
    spanEle.style.color = randomColor
    numberWrap.style.transform=`scale(1.3)`
    numberWrap.style.color = randomColor
  }else{
    numberWrap.style.transform=`scale(1)`
    numberWrap.style.color = "#000"

  }

  listWrap.appendChild(spanEle)
}

export function showNumber(n){
  numberWrap.innerText = n
}