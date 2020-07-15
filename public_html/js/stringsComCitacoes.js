var title;
var msg;
title = "Olá veja as nossas ofertas especiais";
msg = '<a href=\"sale.html\">25% de desconto!</a>';

var elTitle = document.getElementById('title').innerHTML = title;

var elNote = document.getElementById('note');
elNote.innerHTML = msg;
