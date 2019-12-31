var slider = document.getElementById('myRange');
var output = document.getElementById('value');


output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}

slider.addEventListener('mousemove',function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(9, 220, 228)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
});