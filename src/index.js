// import "./event/registryEvent"
// import "@/event/registryEvent"
import imgUrl from "@/assets/bg.png"
import style from "@/assets/test.css"
import "./assets/global.less"

/**
 * 页面添加图片
 */
function createImage(){
  const imgEle = document.createElement('img')
  imgEle.src = imgUrl
  imgEle.classList.add(style.img__container)
  document.body.appendChild(imgEle)
}

createImage()



/**
 * 页面请求省份信息
 */
function createProvinceList(){
  const ulEle = document.createElement('ul')
  fetch('http://yuanjin.tech:5100/api/local').then(res=>res.json()).then(res=>{
  ulEle.innerHTML = res.map(item=>{
      return `<li style="list-style:none; padding:6px 0;cursor:pointer;margin-bottom:8px" class='less-test'>${item.areaName}--${item.id}</li>`
    }).join('')
  })

  document.body.appendChild(ulEle)
}

createProvinceList()


/**
 * 页面设置颜色
 */

function setBgColor(){
  const styleEle = document.createElement('style')
  styleEle.innerHTML = style.toString()
  document.head.appendChild(styleEle)

}

setBgColor()

