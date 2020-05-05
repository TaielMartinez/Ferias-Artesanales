// JavaScript Document


if(localStorage.getItem("login_mail") === null){
	// no logeado

	window.location.replace("public/register")
	
} else {
	// logeado
	console.log('si')
	window.location.replace("public/home")
	
}