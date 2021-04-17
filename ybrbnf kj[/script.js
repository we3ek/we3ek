console.log('Заработало');

let textBlock = document.getElementById('blockOut');
textBlock.innerHTML = textBlock.innerHTML + '<p><b>Привет!</b></p>';

document.querySelector('.h2').innerHTML = document.querySelector('.h2').innerHTML + '<p><b>2021</b></p>';

//сработает при любом изменении
// document.querySelector('.i-1').oninput = function (event) {
// 	console.log(event);
// }

document.querySelector('.i-1').onkeydown = function (event) {
	// let codeKeyPress = event.charCode;
	// if ((codeKeyPress >= 48 )&&(codeKeyPress <= 57)){
	// 	return codeKeyPress;
	// }
	// else {
	// 	return false;
	// }
	// console.log('onkeydown:');
	// console.log(event);
	// console.log('charCode: ' + event.charCode);
	// console.log('code: ' + event.code);
	// console.log('key: ' + event.key);
	// console.log('keyCode: ' + event.keyCode);

}

//+43 -45 (40 )41

document.querySelector('.i-1').onkeyup = function (event) {
	// let codeKeyPress = event.charCode;
	// if ((codeKeyPress >= 48 )&&(codeKeyPress <= 57)){
	// 	return codeKeyPress;
	// }
	// else {
	// 	return false;
	// }
	// console.log('onkeyup:');
	// console.log(event);
	// console.log('charCode: ' + event.charCode);
	// console.log('code: ' + event.code);
	// console.log('key: ' + event.key);
	// console.log('keyCode: ' + event.keyCode);

}
document.querySelector('.i-1').onkeypress = function (event) {
	let codeKeyPress = event.charCode;
	if (((codeKeyPress >= 48) && (codeKeyPress <= 57)) || (codeKeyPress <= 43) || (codeKeyPress <= 45) || (codeKeyPress <= 41) || (codeKeyPress <= 40)) {
		return codeKeyPress;
	}
	else {
	return false;
	// console.log(event);
	// console.log('onkeypress:');
	// console.log('charCode: ' + event.charCode);
	// console.log('code: ' + event.code);
	// console.log('key: ' + event.key);
	// console.log('keyCode: ' + event.keyCode);
	}
}


document.querySelector('.telOut').onclick = function (event){
	document.querySelector('.tel').innerHTML = document.querySelector('.i-1').value;	
}