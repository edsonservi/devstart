class Atleta{
  constructor(nome,idade,peso,altura,notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas    
    }
    // para calcular a categoria do atleta;
    calculaCategoria(){
      let categoria;
      if(this.idade >= 9 && this.idade <= 11){
        categoria = "Infantil";
      }
      else if(this.idade >= 12 && this.idade <= 13){
        categoria = "Juvenil";
      }
      else if(this.idade >= 14 && this.idade <= 15){
        categoria = "Intermediario";
      }
      else if(this.idade >= 16 && this.idade <= 30){
        categoria = "Adulto";
      }
      else {
        categoria = "Sem categoria"
      }
      return categoria
    }
    // para calcular o IMC do atleta;
    calculaIMC(){
      let imc = this.peso / (this.altura ** 2)
      return imc
    }
    // para calcular a média válida do atleta.
    calculaMediaValida(){
      let soma = 0;
      let ordem = this.notas.sort((a, b) => b - a).slice(1,4);
      ordem.forEach(function(nota){soma += nota;});
      return soma / 3;
    }
    // que retorna o nome do atleta
    obtemNomeAtleta(){
      return `Nome: ${this.nome}`;
    }
    // que retorna a idade do atleta
    obtemIdadeAtleta(){
      return `Idade: ${this.idade}`;
    }
    // que retorna o peso do atleta
    obtemPesoAtleta(){
      return `Peso: ${this.peso}`;
    }
    // que retorna a altura do atleta
    obtemAlturaAtleta(){
      return `Altura: ${this.altura}`;
    }
    // que retorna as notas do atleta
    obtemNotasAtleta(){
      return `Notas: ${this.notas.join(", ")}`
    }
    // que retorna a categoria do atleta
    obtemCategoria(){
      return `Categoria: ${this.calculaCategoria()}`
    }
    // que retorna o IMC do atleta
    obtemIMC(){
      return `IMC: ${this.calculaIMC().toFixed(2)}`
    }
    // que retorna a média válida do atleta
    obtemMediaValida(){
      return `Média válida: ${this.calculaMediaValida().toFixed(3)}`
    }
    // relatorio formatado de todas as informações pedidas
    relatorio(){
      console.log(this.obtemNomeAtleta());
      console.log(this.obtemIdadeAtleta());
      console.log(this.obtemPesoAtleta());
      console.log(this.obtemAlturaAtleta());
      console.log(this.obtemNotasAtleta());
      console.log(this.obtemCategoria());
      console.log(this.obtemIMC());
      console.log(this.obtemMediaValida());
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
atleta.relatorio()
