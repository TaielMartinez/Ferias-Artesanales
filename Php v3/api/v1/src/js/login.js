// JavaScript Document

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


$('.boton_ingresar').click(function() {
	login();
})

$('.boton_ingresar').on('click touchstart', function() {
	login();
})




function login() {
	var user_email = $('.input_email').val();
	var user_password = $('.input_password').val();
	
	$.ajax({
		url: "http://localhost/ferias-artesanales/api/v1/",
		method: "POST",
		data: { routes : 'login', login_correo : user_email, login_pass : user_password}, 
		success:function(data) {
			console.log(data)

			try{
				var json = JSON.parse(data);
				
				if(json.json == "true"){
					$('#error_m').html(`<div class="alert alert-success alert-dismissible fade show" role="alert">
					  <strong>Enhorabuena!</strong> La sesion se inicio correctamente!
					  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					  </button>
					</div>`);
					localStorage.setItem('login_mail', user_email);
					localStorage.setItem('login_pass', user_password);
					$.ajax({
						url: "http://localhost/ferias-artesanales/api/v1/",
						method: "POST",
						data: { routes : 'user_data', correo : user_email},
						success:function(data) {
							

							try{
								var json = JSON.parse(data);
								localStorage.setItem('login_dni', json.dni);
								window.location.replace("../home/");
							} catch {}
						}
					})
					
					
				} else {
					error(json.error)
				}
			} catch {}
		}
	})
}


function error(mensaje) {
	$('#error_m').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Error!</strong> `+mensaje+`
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`);
}