function rolar(){
  var inQtd = document.getElementById("number")
  var numDados = inQtd.value

var inDice = document.querySelector('input[name="faces"]:checked')
var numFaces= inDice.value

var somatorio = 0
var i = 0
var rolagens = ""
while(i< numDados ){
  var rolagem = Math.floor(Math.random()*numFaces)+1
somatorio = somatorio + rolagem
  rolagens = rolagens + rolagem + ", "      
  i=i+1
}
var h3 = document.getElementById("soma")
h3.innerHTML = somatorio
var p = document.getElementById("rolagens")
p.innerHTML = rolagens
  
}