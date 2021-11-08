var color1 = document.querySelector("#picker-1");
var color2 = document.querySelector("#picker-2");
var range = document.querySelector("#split");

color1.addEventListener('change', function() {
    document.body.style.backgroundImage = 'linear-gradient(to right,'+ color1.value + ' ,'+ range.value+'%,'+ color2.value+')';
});
color2.addEventListener('change', function() {
    document.body.style.backgroundImage = 'linear-gradient(to right,'+ color1.value + ' ,'+ range.value+'%,'+ color2.value+')';
});
range.addEventListener('change', function() {
    document.body.style.backgroundImage = 'linear-gradient(to right,'+ color1.value + ' ,'+ range.value+'%,'+ color2.value+')';
});

