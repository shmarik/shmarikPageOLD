let text ="я-крутой-тип"
let arrTxt = Array.from(text)
let p = 0
let o = 0
while(p !== -1){
    let i = arrTxt.indexOf("-")
    p = i 
    arrTxt[i + 1] = arrTxt[i + 1]?.toUpperCase()
    let last = arrTxt.splice(i, 1)
    o = last 
}
arrTxt.push(`${o}`)
arrTxt[0] = arrTxt[0].toUpperCase()
let res = arrTxt.join ("");
console.log(res);
