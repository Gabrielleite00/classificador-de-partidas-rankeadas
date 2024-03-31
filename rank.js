let wins = 99
let loss = 5
let rank = wins - loss
console.log(rank)

if (rank <= 10) {
  console.log("O Herói tem saldo de " + rank + ' vitórias. E está no nível Ferro.')
}
else if (rank <=20) {
  console.log("O Herói tem saldo de " + rank + ' vitórias. E está no nível Bronze.')
}
else if (rank <=50) {
  console.log("O Herói tem saldo de " + rank + ' vitórias. E está no nível Prata.')
}
else if (rank <=80) {
  console.log("O Herói tem saldo de " + rank + ' vitórias. E está no nível Ouro.')
}
else if (rank <=90) {
  console.log("O Herói tem saldo de " + rank + ' vitórias. E está no nível Diamante.')
}
else if (rank <=100) {
  console.log("O Herói tem saldo de " + rank + ' vitórias. E está no nível Lendário.')
}
else {
  console.log("O Herói tem saldo de " + rank + ' vitórias. E está no nível Imortal.')
}
