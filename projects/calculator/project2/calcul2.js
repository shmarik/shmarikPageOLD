let naprimer = []

function createEl(){
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
    const myTR = document.createElement("TR");
    myTR.innerHTML = `
        <td>${pokValue}</td>
        <td>${cenValue}</td>
    `
    table.appendChild(myTR);
    document.querySelector("#pokupki").value = '' //Обнуление строчки
    document.querySelector("#cena").value = ''    //Обнуление строчки

    document.querySelector(".totalp").innerHTML = //Колво покупок 
        `<p>Всего покупок: ${table.querySelectorAll('tr').length-1}</p> 
        `  
        document.querySelector(".totalc").innerHTML = `<p>Цена: ${cena}</p>`
                                                                                
    
    

    } else {
        alert("пусто не густо")
    }
    if (cenValue == 1337 && pokValue == 1337) {
        alert("Элита?")
    }

}




