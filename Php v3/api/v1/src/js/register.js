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
	
	if(localStorage.getItem("login_mail") != null){
		window.location.replace("../../")
	}
	
	
	$('.boton_siguiente').click(function(){
		if(validar_datos()){
			enuso()
		}
	})
	
});


function enuso(){
	var correo = $('.input_email').val();
	$.ajax({
		url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
		method: "POST",
		data: { routes : 'registro_enuso', correo : correo},
		success:function(data) {
			console.log(data);
			var result = JSON.parse(data);

			if(result.json == "true"){
		
				localStorage.setItem('input_nombre', $('.input_nombre').val());
				localStorage.setItem('input_apellido', $('.input_apellido').val());
				localStorage.setItem('input_email', $('.input_email').val());
				localStorage.setItem('input_password', $('.input_password').val());
		
				console.log('todo ok')
				window.location.replace("2")
				
			} else {
				error_alert('Email en uso', 'No puedes registrar otra cuenta con el mismo email.');
				$('.input_email').addClass('is-invalid');
				$('.input_email').removeClass('is-valid');
			}
		}
	})
	/*
	console.log(result);
	var result = JSON.parse(result);
	
	if(result.json == "true"){
		
		localStorage.setItem('input_nombre', $('.input_nombre').val());
		localStorage.setItem('input_apellido', $('.input_apellido').val());
		localStorage.setItem('input_email', $('.input_email').val());
		localStorage.setItem('input_password', $('.input_password').val());

		console.log('todo ok')
		window.location.replace("2")
		
	} else {
		error_alert('Email en uso', 'No puedes registrar otra cuenta con el mismo email.');
		$('.input_email').addClass('is-invalid');
		$('.input_email').removeClass('is-valid');
	}*/
}

function ensuo_ajax(){
	var correo = $('.input_email').val();
	return $.ajax({
		url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
		method: "POST",
		data: { routes : 'registro_enuso', correo : correo}
	})
}


function validar_datos(){
	var input_nombre = $('.input_nombre').val();
	var input_apellido = $('.input_apellido').val();
	var input_email = $('.input_email').val();
	var input_password = $('.input_password').val();
	
	var todo_ok = true;
	
	if(input_nombre != "" && input_nombre.length < 255) {
		$('.input_nombre').addClass('is-valid');
		$('.input_nombre').removeClass('is-invalid');
	} else {
		$('.input_nombre').addClass('is-invalid');
		$('.input_nombre').removeClass('is-valid');
		todo_ok = false;
	}
	
	if(input_apellido != "" && input_apellido.length < 255) {
		$('.input_apellido').addClass('is-valid');
		$('.input_apellido').removeClass('is-invalid');
	} else {
		$('.input_apellido').addClass('is-invalid');
		$('.input_apellido').removeClass('is-valid');
		todo_ok = false;
	}
	
	if(input_email != "" && input_email.length < 255 && input_email.includes('@') && input_email.includes('.')) {
		$('.input_email').addClass('is-valid');
		$('.input_email').removeClass('is-invalid');
	} else {
		$('.input_email').addClass('is-invalid');
		$('.input_email').removeClass('is-valid');
		todo_ok = false;
	}
	
	if(input_password != "" && input_password.length < 255) {
		$('.input_password').addClass('is-valid');
		$('.input_password').removeClass('is-invalid');
	} else {
		$('.input_password').addClass('is-invalid');
		$('.input_password').removeClass('is-valid');
		todo_ok = false;
	}
	
	return todo_ok;
}