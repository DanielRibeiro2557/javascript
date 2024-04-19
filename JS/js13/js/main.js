const view1 = document.getElementById("view1")//usar "" ao invez de ''
console.log(view1)
const view2 = document.querySelector("#view2")
console.log(view2)
view1.style.display = 'flex'
view2.style.display = 'none'

const views = document.getElementsByClassName("view")
console.log(views);

const sameViews = document.querySelectorAll('.view')
console.log(sameViews);

const divs = view1.querySelectorAll("div")
console.log(divs)
const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)

function click(){
    if(evenDivs[0].style.backgroundColor == 'darkblue'){
        for (let i = 0; i < evenDivs.length; i++){
            evenDivs[i].style.backgroundColor = 'black'
        }
    } else {
        
    for (let i = 0; i < evenDivs.length; i++){
        evenDivs[i].style.backgroundColor = 'darkblue'
    }
    }
}

const navText = document.querySelector("header>h1")
console.log(navText)
navText.textContent = "Olá mundo!"
const navbar = document.querySelector("header")
navbar.innerHTML = `<h1>Olá</h1> <p>isso deve alinhar?<p/>`
navbar.style.color = '#ffffff'
navbar.querySelector("p").style.marginLeft = "5px"

