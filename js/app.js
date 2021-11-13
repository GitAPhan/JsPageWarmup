var picture_frame = document.getElementById('image');
var smaller = document.getElementById('smaller');
var smallest = document.getElementById('smallest');

picture_frame.style.opacity = '.5';
smaller.style.fontSize = '19px';
smallest.style.font = 'italic 21px bold';

var boldIt = document.getElementsByClassName('bold');
for(var i = 0; i<boldIt.length;i++) {
    boldIt[i].innerText = 'Change to this text!';
}