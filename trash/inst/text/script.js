function z(){
    let a = document.querySelector(".inp")
    let b = String(a.value) 
    alert(b.toUpperCase())
}
function nz(){
    let a = document.querySelector(".inp")
    let b = String(a.value) 
    alert(b.toLowerCase())
}
function zn(){
    let a = document.querySelector(".inp")
    let b = String(a.value)
    let fb = b.slice(0,1)
    let nfb = b.slice(1) 
    alert(fb.toUpperCase()+nfb.toLowerCase())
}