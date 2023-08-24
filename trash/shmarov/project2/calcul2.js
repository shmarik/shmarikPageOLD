let naprimer = []

function createEl(){
    const myTR = document.createElement("TR");
    const obTr = document.createElement("TR");

    const pok = document.querySelector("#pokupki");
    const pokValue = pok.value

    const cen = document.querySelector("#cena")
    const cenValue = cen.value
    naprimer.push(Number(cenValue))
    let cena = naprimer.reduce((partialSum, a) => partialSum + a, )
    
    // and &&
    // or ||
    if (cenValue != "" && pokValue != "" ) {
    const table = document.querySelector(".tablica"); //Добавление новых строчек 

    obTr.innerHTML = ``
    myTR.innerHTML = `
        <td>${pokValue}</td>
        <td>${cenValue}</td>
    `
    table.appendChild(myTR);
    let poky = table.querySelectorAll('tr').length-1
    obTr.innerHTML= `
        <td class="d">${poky}</td>
        <td class="d">${cena}</td>
    `

    table.appendChild(obTr);
    document.querySelector("#pokupki").value = '' //Обнуление строчки
    document.querySelector("#cena").value = ''    //Обнуление строчки
    } else {
        alert("пусто не густо")
    }

    if (cenValue == 1337 && pokValue == 1337) {
        alert("Элита?")
    }

}




