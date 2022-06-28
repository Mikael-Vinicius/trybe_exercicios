//exercicio1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
console.log('bem vinda, ' + info.personagem)
//exercicio2
console.log(info.recorrente)
//exercicio3
for (let chave in info) {
  console.log(chave)
}
//exercicio4
for (let valor in info) {
  console.log(info[valor])
}
//exercicio5
let infos = {
personagem: 'Tio Patinhas',
origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
nota: 'O último MacPatinhas',
recorrente: 'Sim'
}
for(let valor in info)
  console.log(info[valor] + ' e ' + infos[valor])
//exercicio6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
for()



