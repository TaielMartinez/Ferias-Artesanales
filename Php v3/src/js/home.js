

$.ajax({
    url: "http://radiolamadriguera.com/Ferias-Artesanales/api/v1/",
    method: "POST",
    data: {
        routes : 'admin',
        admin : 'home',
        login_dni : localStorage.getItem('login_dni'),
        login_pass : localStorage.getItem('login_pass')
    }
}).done( function(data) {
    $('.home_admin_btn').html(data);
});