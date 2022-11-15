let atletas = [
  {nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88]},
  {nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33]},
  {nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8]},
  {nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5]},
  ];

// Solução Proposta

// Calcula média
function Media(notas){
  let soma = 0;
  let ordem = notas.sort((a, b) => b - a).slice(1,4);
  ordem.forEach(function(nota){soma += nota;});
  return soma / 3;
}

// Formata a saida de dados
function Formatar(atleta){
  console.log(`Atleta: ${atleta.nome}`);
  /*
  Queria formatar essa saida para ficar visualmente bonita adicionando um espaço após 
  cada virgula, mas a proposta não solicita isso. Mas para ref: atleta.notas.join(", ")
  */
  console.log(`Notas Obtidas: ${atleta.notas}`);
  /*
  Aqui seria interessante formatar a saida numerica para dois digitos apos o ponto
  .toFixed(2) no retorno da func Media
  */
  console.log(`Média Válida: ${Media(atleta.notas)}\n`);
}

// Quebra a coleção em atletas individuais
atletas.forEach(function(atleta){
  Formatar(atleta);
})