// JavaScript Document


function error_alert(text1, text2, color){
	if(color){} else (color = 'warning')
	$('.error_alert').html(`<div class="alert alert-`+color+` alert-dismissible fade show" role="alert">
							  <strong>`+text1+`</strong> `+text2+`
							  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							  </button>
							</div>`)
}