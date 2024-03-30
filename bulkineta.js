
function mostrarResultados() {
	let peso = parseFloat(document.getElementById("peso-input").value);
	let altura = parseFloat(document.getElementById("altura-input").value);
	let dato3 = document.getElementById("sexo__hombre").checked;
	let dato4 = document.getElementById("sexo__mujer").checked;
	let edad = parseFloat(document.getElementById("edad-input").value);
	let actividad = parseFloat(document.getElementById("actividad").value);
	let texto = document.getElementById("resultado-text");
	texto.textContent = "";

if ((isNaN(peso) || isNaN(altura) || isNaN(edad) || isNaN(actividad)) || (!dato3 && !dato4)) {
	texto.textContent = `Rellena todos los campos correctamente`
} else {
	if (dato3) {
		let resultado = 88.362 + (13.397 * peso) + (4.799  * altura) - (5.677 * edad);
		let resultadoVolumen = resultado *= actividad
		let resultadoFinal = (Math.round(resultadoVolumen + 100))
		texto.textContent = `Calorías para aumentar masa muscular: ${resultadoFinal}`
	} else {
		let resultado = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
		let resultadoVolumen = resultado *= actividad
		let resultadoFinal = (Math.round(resultadoVolumen + 100))
		texto.textContent = `Calorías para aumentar masa muscular: ${resultadoFinal}`

	}
}
}


