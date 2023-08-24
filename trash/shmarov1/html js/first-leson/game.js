const heart = document.querySelector(".heart")
const score = document.querySelector(".score")
let click = 0
function inc(){
    click++
    score.innerHTML = click
    if(click == 10)
    alert("лох")
}
