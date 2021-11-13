var pushed_status = Cookies.get('pushed');

var checkout_section = document.getElementById( 'checkout_status');

if(pushed_status === 'yes') {
    checkout_section['innerText'] = "Congrats, you clicked!";
}