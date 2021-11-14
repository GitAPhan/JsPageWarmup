function clear_pushed() {
    Cookies.remove('pushed');    
    location.reload(true);
}

var pushed_status = Cookies.get('pushed');

if (pushed_status === 'yes') {
    var clearCookies = document.createElement('button');
    clearCookies.innerText = 'Clear Cookies';
    clearCookies.setAttribute('onclick', 'clear_pushed()');
    document.body.appendChild(clearCookies);
}

var checkout_section = document.getElementById('checkout_status');

if (pushed_status === 'yes') {
    checkout_section['innerText'] = "Congrats, you clicked!";
} else {
    checkout_section['innerText'] = "You have yet to click"
}