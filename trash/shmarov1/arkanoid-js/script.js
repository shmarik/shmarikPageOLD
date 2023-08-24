window.onload = start
// let shar= {
//     top: 400,
//     left: 200,
// }

// let delta = {top:-3, left: 3,}

// let kirpichik = [
//     {top: 20, left: 20, visible: true},
//     {top: 20, left: 120, visible: true},
//     {top: 20, left: 220, visible: true},
//     {top: 20, left: 320, visible: true},
//     {top: 20, left: 420, visible: true},
// ]

let platforma = 220

function start(){
    window.onkeydown = keyprogram
}

function keyprogram(e){
    if (e.keyCode == 37){
        platforma = platforma -70
        if (platforma < 10 ){
            platforma = 10
        }
    }
    document.getElementById("id_bita"). style.left = platforma

        if (e.keyCode == 39){
            platforma = platforma +70
            if (platforma > 430 ){
                platforma = 430
            }
        }
        document.getElementById("id_bita").style.left = platforma
    }
    if (e.keyCode == 32){

    
    console.log(e)
}   