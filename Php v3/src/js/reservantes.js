var feria_id = window.location.href.split('?id=')[1];

if(localStorage.getItem('login_dni')){
	$.ajax({
		url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
		method: "POST",
        data: { routes : 'admin', 
        admin : 'my_ferias_get', 
        login_dni : localStorage.getItem('login_dni'),
        id : feria_id
    },
		success:function(data) {
			//console.log(data)
			
			try{
				constructor(JSON.parse(data));
				//console.log('const')
			} catch {
				
		}
			
		}
	})
}

function constructor(json) {
	let html = '';
	//console.log(json);

	let info = json['info'][0];

	$('.json_nombre').html(info.nombre);
	$('.json_ubicacion').html(info.ubicacion);
	$('.json_fecha').html(info.fecha);
	$('.json_disponibilidad').html(info.puestos_disponibles);
	$('.json_precio').html(info.precio);
	$('.json_descripcion').html(info.descripcion);
	
	for(var index = 0; index < json.reservantes.length; index++){
		let temp = json['reservantes'][index];
		html = html + `
			<div class="card mt-2" style="font-size: 2.5vh">
				<div class="card-body">
					<div class="font-weight-bold">Nombre: `+temp.nombre +` `+ temp.apellido+`</div>
					<div class="font-weight-bold">Celular: `+temp.celular+`</div>
					<div class="font-weight-bold mt-3">DNI: `+temp.dni+`</div>
				</div>
			</div>
		`;
	}

	//console.log(html)
	
	$('.ferias_list_ajax').html(html);
}
