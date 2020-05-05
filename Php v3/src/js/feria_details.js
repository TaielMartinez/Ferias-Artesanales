// JavaScript Document

if(localStorage.getItem('login_mail') === null || localStorage.getItem('login_pass') === null || localStorage.getItem('login_dni') === null){
	window.location.replace("../../../");
}

var feria_id = window.location.href.split('?id=')[1];
var confirmar = false;

$.ajax({
	url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
	method: "POST",
	data: { routes : 'get_ferias', id : feria_id},
	success:function(data) {
		try{
			constructor(JSON.parse(data));
		} catch {
			console.error()
		}
		
	}
})


function constructor(json) {
	console.log(json);
	json = json[0];
	$('.json_nombre').text(json.nombre);
	$('.json_ubicacion').text(json.ubicacion);
	if(json.precio == null){
		$('.json_precio').text('Precio a convenir');
	} else {
		$('.json_precio').text('$'+json.precio);
	}
	if(json.puestos_disponibles == "0"){
		$('.json_disponibilidad').text('Sin Lugar');
	} else {
		$('.json_disponibilidad').text(json.puestos_disponibles);
		confirmar = true;
		$('.boton_confirmar').addClass('btn-success');
		$('.boton_confirmar').removeClass('btn-secondary');
	}
	$('.json_descripcion').text(json.descripcion);
	$('.json_fecha').text(json.fecha);
	
}

$('.input_confirmar').click(function(){
	if(confirmar){
		$.ajax({
			url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
			method: "POST",
			data: { routes : 'reservar_puesto', dni : localStorage.getItem('login_dni'), id_feria : feria_id},
			success:function(data) {
				console.log(data)
				try{
					if(JSON.parse(data).json === "true"){
						window.location.replace("../confirmacion/reserva_confirmada")
					}
				} catch {
					
			}
			}
		})
	}
})