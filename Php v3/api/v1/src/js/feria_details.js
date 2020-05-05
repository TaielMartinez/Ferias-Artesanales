// JavaScript Document

if(localStorage.getItem('login_mail') === null || localStorage.getItem('login_pass') === null || localStorage.getItem('login_dni') === null){
	window.location.replace("../../../");
}

var feria_id = window.location.href.split('?id=')[1];

$.ajax({
	url: "http://localhost/ferias-artesanales/api/v1/",
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
	$('.json_descripcion').text(json.descripcion);
	$('.json_fecha').text(json.fecha);
	
}

$('.input_confirmar').click(function(){
	$.ajax({
		url: "http://localhost/ferias-artesanales/api/v1/",
		method: "POST",
		data: { routes : 'reservar_puesto', dni : localStorage.getItem('login_dni'), id_feria : feria_id},
		success:function(data) {
			try{
				if(JSON.parse(data).json === "true"){
					window.location.replace("../confirmacion/reserva_confirmada")
				}
			} catch {
				
		}
		}
	})
})