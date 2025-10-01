// Calculadora de Partidas Rankeadas
//problema   
function partidasRankeadas (vitorias, derrotas) {
 
let saldo = vitorias - derrotas;

let nivel;
  if (vitorias <= 10) {
	  nivel = “Ferro”; }
  if (vitorias <= 20) {
	  nivel = “Bronze”; }
  if (vitorias <= 50) {
	  nivel = “Prata”;
}

  if (vitorias <= 80) {
	  nivel = “Ouro”; }
  if (vitorias <= 90) {
	  nivel = “Diamante” }
  if (vitorias <= 100) {
	  nivel = “Lendário”;
} else {
	  nivel = “Imortal”; }

  return ‘O Herói tem saldo de $ {saldo} e está no nível de ${nivel}’;
 }


console.log(partidasRankeadas(5, 2)); // “O Herói tem de saldo de 3 e está no nível de Ferro”
console.log(partidasRankeadas(25, 5)); // “O Herói tem de saldo de 20 e está no nível de Prata”
console.log(partidasRankeadas(105, 40)); // “O Herói tem de saldo 65 e está no nível de Imortal”

console.log(partidasRankeadas(105, 40)); // “O Herói tem de saldo 65 e está no nível de Imortal”
