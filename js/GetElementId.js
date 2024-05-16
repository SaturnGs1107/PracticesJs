document.getElementById('cambiarTexto').addEventListener('click', function(){
   var elemento = document.getElementById('mensaje');
   elemento.textContent = 'texto cambiado';
});
var Texto = "Texto original";
document.getElementById('volverTexto').addEventListener('click', function(){
    var Texto = document.getElementById('mensaje');
Texto.innerText = Texto;
});