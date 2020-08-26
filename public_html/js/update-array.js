var colors = ['white', 'black', 'custom'];

//atualiza o terceiro elemento do array
colors[2] = 'beige';

//obtem o elemento com id colors 
var el = document.getElementById('colors');
el.textContent = colors[2];

