// JavaScript Document

if(localStorage.getItem('login_mail') === null || localStorage.getItem('login_pass') === null || localStorage.getItem('login_dni') === null){
	window.location.replace("../../../");
}

if(localStorage.getItem('login_dni')){
	$.ajax({
		url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
		method: "POST",
        data: { routes : 'admin', 
        admin : 'my_ferias_get', 
        login_dni : localStorage.getItem('login_dni')
    },
		success:function(data) {
			console.log(data)
			
			try{
				constructor(JSON.parse(data));
				console.log('const')
			} catch {
				
		}
			
		}
	})
}





function constructor(json) {
	console.log('json :'+json);
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
					<a href="../reservantes/?id=`+temp.id+`"><button class="btn btn-success btn-block mt-3 btn-sm">Ver reservantes</button></a>
				</div>
			</div>
		`;
	}
	
	$('.ferias_list_ajax').html(html);
}