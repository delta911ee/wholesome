import { wholesome } from './wholesome.js'

let t = document.getElementById('actualText')
let fonts = ['Dancing Script, cursive', 'Gloria Hallelujah, cursive', 'Chilanka, cursive','Petit Formal Script, cursive','Pacifico, cursive','Nothing You Could Do, cursive']
let hoverColors = ['#1e90ff','#7700ff', '#ff006a', '#ffc400', '#ff5e00', '#00ff80', '#9e00ce']

function addHover(){
    t.addEventListener('mouseover',()=>{
        t.style.color = hoverColors[Math.round(Math.random()*hoverColors.length)]
    })
    t.addEventListener('mouseout',()=>{
        t.style.color = 'Black'
    })
}

window.addEventListener('load', ()=>{
    let f = fonts[Math.floor(Math.random()*fonts.length)]
    let q = wholesome[Math.floor(Math.random()*wholesome.length)]
    t.style.fontWeight = "bold"
    t.style.fontFamily = f
    t.innerText = q
    addHover()
})

