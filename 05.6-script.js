let nota1 = Number(prompt("Digite a sua primeira nota: "))
let nota2 = Number(prompt("Digite a sua segunda nota: "))

let media = (nota1 + nota2) / 2

if(media >= 7){

  alert("passou, media: " + media )
}else{
  alert("Não deu, Media: " + media ) 
}
