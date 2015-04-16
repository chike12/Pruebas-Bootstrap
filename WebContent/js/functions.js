/**
 * Waipi APP
 * 
 * This script contains all functions and configuration that the website use.
 * 
 * @author Cesar Llontop
 * 
 */

var latitud = document.getElementById("latitudLocal");
var longitud = document.getElementById("longitudLocal");

function showPosition(position) {
	latitud.innerHTML = position.coords.latitude;
	longitud.innerHTML = position.coords.longitude;
}

function errorCallback(error) {
	alert('ERROR(' + error.code + '): ' + error.message);
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, errorCallback);
	} else {
		alert("Navegador no soporta gelocalizacion");
	}
}

$(document).ready(function() {
	$("#btnAgregarEmpresa").click(function() {
		$("#divAgregarEmpresa").show();
		$("#divAgregarLocal").hide();
	});

	$("#btnCancelar").click(function() {
		$("#divAgregarEmpresa").hide();
		$("#divAgregarLocal").show();
	});
});
