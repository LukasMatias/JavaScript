var hoje = new Date();
var hora = hoje.getHours();
var saudacao;

if(hora > 18){
    saudacao = 'Boa Noite CARAII!';
} else if (hora > 12){
    saudacao = 'Boa Tarde';
} else if (hora > 0){
    saudacao = 'Bom Dia!';
}
 document.write('<h3>' + saudacao + '</h3>');
