// JavaScript Document

if(localStorage.getItem('login_mail') === null || localStorage.getItem('login_pass') === null || localStorage.getItem('login_dni') === null){
	window.location.replace("../../../");
}

$.ajax({
	url: "http://localhost/ferias-artesanales/api/v1/",
	method: "POST",
	data: { routes : 'get_ferias'},
	success:function(data) {
		
		try{
			constructor(JSON.parse(data));
		} catch {
			
	}
		
	}
})


function constructor(json) {
	console.log(json);
	let html = '';
	
	for(var index = 0; index < json.length; index++){
		let temp = json[index];
		let precio;
		if(temp.precio == null){
			precio = "Precio a convenir";
		} else {
			precio = "Precio: $"+temp.precio;
		}
		html = html + `
			<div class="card mt-2" style="font-size: 2.5vh">
				<div class="card-body">
					<div class="font-weight-bold">Nombre: `+temp.nombre+`</div>
					<div style="font-size: 1.9vh">Fecha: `+temp.fecha+`</div>
					<div class="font-weight-bold mt-3">`+precio+`</div>
					<a href="../feria_details/?id=`+temp.id+`"><button class="btn btn-success btn-block mt-3 btn-sm">Ver mas</button></a>
				</div>
			</div>
		`;
	}
	
	$('.ferias_list_ajax').html(html);
}