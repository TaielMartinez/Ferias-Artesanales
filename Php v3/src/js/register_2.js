// JavaScript Document

$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
	
	
	if(localStorage.getItem('input_nombre') === null){
		window.location.replace("../")
	}
	
	if(localStorage.getItem("login_mail") != null){
		window.location.replace("../../../")
	}
	
	$('.boton_siguiente').click(function(){
		if(validar_datos()){
			//console.log('validar los datos: '+validar_datos())
			validado()
		}
	})
	
});

function validado(){
	//console.log('validado');

	$.ajax({
		url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
		method: "POST",
		data: {
			routes : 'registro',
			dni : $('.input_dni').val(),
			celular : $('.input_celular').val(),
			pass : localStorage.getItem('input_password'),
			correo : localStorage.getItem('input_email'),
			nombre : localStorage.getItem('input_nombre'),
			apellido : localStorage.getItem('input_apellido')
		}
	}).done( function(data) {
		//console.log(data);

		if(data.includes('error_celular')){
			console.log('hubo un error con el celular')
			error_alert('Celular en uso', 'No puedes registrar otra cuenta con el mismo celular.');
			$('.input_celular').addClass('is-invalid');
			$('.input_celular').removeClass('is-valid');
		}
		if (data.includes('error_dni')){
			console.log('hubo un error con el dni')
			error_alert('Dni en uso', 'No puedes registrar otra cuenta con el mismo dni.');
			$('.input_dni').addClass('is-invalid');
			$('.input_dni').removeClass('is-valid');
		}

		if(!data.includes('error_celular') && !data.includes('error_dni')){
			console.log('no hubo un error')
			localStorage.setItem('login_mail', localStorage.getItem('input_nombre'));
			localStorage.setItem('login_pass', localStorage.getItem('input_password'));
			localStorage.setItem('login_dni', $('.input_dni').val());
			console.log('registro'+data);
			localStorage.removeItem('input_nombre');
			localStorage.removeItem('input_apellido');
			localStorage.removeItem('input_email');
			localStorage.removeItem('input_password');
			window.location.replace("../../");
		}

	}).fail( function(data) {
		alert( 'Error!!' + data);
	})

	/*
	$.ajax({
		url: "https://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
		method: "POST",
		data: { routes : 'registro_enuso', dni : dni, celular : celular},
		successs:function(data){
			console.log('enuso'+data);
			var result = JSON.parse(data);
			
			if(result.json == "true"){
				
				localStorage.setItem('login_mail', localStorage.getItem('input_nombre'));
				localStorage.setItem('login_pass', localStorage.getItem('input_password'));
				localStorage.setItem('login_dni', $('.input_dni').val());
				
				$.ajax({
						url: "https://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
						method: "POST",
						data: { routes : 'registro', dni : $('.input_dni').val(), celular : $('.input_celular').val(), pass : localStorage.getItem('input_password'), correo : localStorage.getItem('input_email'), nombre : localStorage.getItem('input_nombre'), apellido : localStorage.getItem('input_apellido')},
						success:function(data) {
							console.log('registro'+data);
							localStorage.removeItem('input_nombre');
							localStorage.removeItem('input_apellido');
							localStorage.removeItem('input_email');
							localStorage.removeItem('input_password');
							//window.location.replace("../../");
						}
					})
				
			} else {
				if(result.error == 'celular'){
					error_alert('Celular en uso', 'No puedes registrar otra cuenta con el mismo celular.');
					$('.input_celular').addClass('is-invalid');
					$('.input_celular').removeClass('is-valid');
				}
				if (result.error == 'dni'){
					error_alert('Dni en uso', 'No puedes registrar otra cuenta con el mismo dni.');
					$('.input_dni').addClass('is-invalid');
					$('.input_dni').removeClass('is-valid');
				}
				if (result.error == 'dni-celular'){
					error_alert('Dni y celular en uso', 'No puedes registrar otra cuenta con el mismo dni y celular.');
					$('.input_dni').addClass('is-invalid');
					$('.input_dni').removeClass('is-valid');
					$('.input_celular').addClass('is-invalid');
					$('.input_celular').removeClass('is-valid');
				}
			}
		},
	}).fail( function(error) {
		console.log('error: '+error)
	})*/

}



function validar_datos(){
	var input_dni = $('.input_dni').val();
	var input_celular = $('.input_celular').val();
	//console.log(input_celular)
	
	var todo_ok = true;
	
	if(input_dni != "" && input_dni.length < 15 && input_dni.length > 7) {
		$('.input_dni').addClass('is-valid');
		$('.input_dni').removeClass('is-invalid');
	} else {
		$('.input_dni').addClass('is-invalid');
		$('.input_dni').removeClass('is-valid');
		todo_ok = false;
	}
	
	if(input_celular != "" && input_celular.length < 255) {
		$('.input_celular').addClass('is-valid');
		$('.input_celular').removeClass('is-invalid');
	} else {
		$('.input_celular').addClass('is-invalid');
		$('.input_celular').removeClass('is-valid');
		todo_ok = false;
	}
	
	return todo_ok;
}