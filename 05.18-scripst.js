let distancia = Number(prompt("Digite a distancia em kilometros"))
let tempo = distancia / 300000
let minuto  
let hora 
let dia
let mes
let ano 

 alert("O tempo de viagem será" + tempo, "S")


if(tempo >= 60){
  minuto = tempo / 60
  alert("O tempo de viagem será" + minuto, "Mins")
}
if(minuto >= 60){
  hora = minuto / 60 
   alert("O tempo de viagem será" + hora, "Horas")
}

if(tempo >= 60){
  minuto = tempo / 60
  alert("O tempo de viagem será" + minuto, "Mins")
}