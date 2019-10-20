import { iconsList } from './iconsList.js'

let root = document.getElementById('root')

let iconsDiv = document.createElement('div')
iconsDiv.className = 'container'

iconsList.forEach(item => {
  let el = document.createElement('div')
  let a = document.createElement('a')
  let circle = document.createElement('div')
  let img = document.createElement('img')

  el.className = 'grid-item'
  a.setAttribute('target', '_blank')
  a.setAttribute('href', item.link)
  circle.className = 'circle'
  circle.style.backgroundColor = item.color
  img.setAttribute('src', './src/imgs/' + item.src)
  img.setAttribute('alt', item.name)
  img.setAttribute('title', item.name)

  circle.append(img)
  a.append(circle)
  el.append(a)
  iconsDiv.append(el)
  root.append(iconsDiv)
})
