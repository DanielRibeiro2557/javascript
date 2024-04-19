const view1 = document.getElementById("view1")
const view2 = document.querySelector("#view2")
const p = document.getElementById("tcc")

function troca() {
    if (view1.style.display == "flex") {
        view1.style.display = "none"
        view2.style.display = "block" 
    } else {
        view1.style.display = "flex"
        view2.style.display = "none" 
    }
}

p.addEventListener("click", troca)