// JavaScript Document


if(localStorage.getItem('login_mail') === null || localStorage.getItem('login_pass') === null || localStorage.getItem('login_dni') === null){
	window.location.replace("../../../");
}


$('.input_login_out').click(function (){
	
	localStorage.removeItem('login_mail');
	localStorage.removeItem('login_pass');
	localStorage.removeItem('login_dni');
	
	
	window.location.replace("../login/");
	
})