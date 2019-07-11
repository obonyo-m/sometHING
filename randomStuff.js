//Create a bar indicating user's progress through the document
window.onscroll = function() {showProgress()};

function showProgress(){
    var scrolled = document.documentElement.scrollTop || 
    document.body.scrollTop;
    var remHeight = document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    var pcScrolled = (scrolled / remHeight) * 100;
    document.querySelector('#scroll').style.width = 
    pcScrolled + '%';
}
//Display modal when btn is clicked
var btn = document.getElementById('btn');
var modal = document.getElementById('modal-background');
var close = document.getElementById('close');
btn.onclick = function(){
    modal.style.visibility = "visible";
    modal.style.opacity = 1.0;
    modal.style.filter = opacity(1.0);
}
close.onclick = function(){
    modal.style.visibility = "hidden";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.visibility = "hidden";
    }
}
//Show slider value
var output = document.querySelector('#slider-output');
var slider = document.querySelector('#slider');
output.innerHTML = slider.value;
slider.oninput = function(){
    output.innerHTML = this.value;
}