let dias = Number(prompt("Quantos dias: "))
let valordia 
let totalB
let desconto10
let desconto15
let valordaconta

if(dias <= 5){
    valordia = 100

}
if(dias >= 6 && dias <= 10){
   valordia = 90

}
if(dias >= 11){
  valordia = 80
}

totalB = dias * valordia

desconto10 = totalB * 0.1

desconto15 = totalB * 0.15 //15%100

valordaconta = totalB - desconto10 - desconto15 + 150


alert("Total Bruto: R$" + totalB +
    "\nDesconto 1: R$" + desconto10 +
    "\nDesconto 2: R$" + desconto15 +
    "\nMulta R$150.00" +
    "\nValor da conta: R$" + valordaconta)