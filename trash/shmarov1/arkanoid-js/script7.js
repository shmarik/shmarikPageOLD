platforma = 220;

function startProgram(){
	window.onkeydown = keyProgram;
}
function keyProgram(e){
    if (e.keyCode == 37){
    	platforma = platforma - 70;
    	if (platforma < 10){ platforma = 10 }
		document.getElementById('id_bita').style.left = platforma;
    }
    if (e.keyCode == 39){
    	platforma = platforma + 70;
    	if (platforma > 430){ platforma = 430 }
		document.getElementById('id_bita').style.left = platforma;
    }
    // if (e.keyCode == 32 || e.charCode == 32){
    // 	startShar();
    // }

  	if (e.keyCode == 38){
    	alert('Нажата кнопка вверх');
    }
    console.log(e)
}


window.onload = startProgram;
