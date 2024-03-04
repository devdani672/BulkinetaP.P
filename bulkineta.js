
function mostrarResultados() {
	let dato1 = parseFloat(document.querySelector(".peso").value);
	let dato2 = parseFloat(document.querySelector(".altura").value);
	let dato3 = document.getElementById("sexo__hombre").checked;
	let dato4 = document.getElementById("sexo__mujer").checked;
	let dato5 = parseFloat(document.querySelector(".edad").value);
	let dato6 = parseFloat(document.getElementById("actividad").value);

if ((isNaN(dato1) || isNaN(dato2) || isNaN(dato5) || isNaN(dato6)) || (!dato3 && !dato4)) {
	console.log("Rellena todos los campos correctamente")
} else {
	if (dato3) {
		let resultado = 88.362 + (13.397 * dato1) + (4.799  * dato2) - (5.677 * dato5);
		let resultadoVolumen = resultado *= dato6
	} else {
		let resultado = 447.593 + (9.247 * dato1) + (3.098 * dato2) - (4.330 * dato5);
		let resultadoVolumen = resultado *= dato6
	}
}

var parrafo = document.getElementById("resultado__text"); 

parrafo.textContent = "Tus calorias de voluemn son" + resultadoVolumen;
}