import { docsList } from './docsList.js'
docsList.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

let root = document.getElementById('root')

let list = document.createElement('div')
list.className = 'list'
let ul = document.createElement('ul')

docsList.forEach(item => {
  let el = document.createElement('li')
  let a = document.createElement('a')
  a.setAttribute('target', '_blank')
  a.setAttribute('href', item.link)
  a.textContent = item.name
  el.append(a)
  ul.append(el)
  list.append(ul)
  root.append(list)
})
