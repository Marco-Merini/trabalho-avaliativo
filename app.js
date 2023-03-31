//app
import {question} from 'readline-sync';
//app
import {createConnection} from 'mysql2';




var con = createConnection({
  user: 'root',
  password: 'hbXutdy2!',
  port: '3306',
  database: 'classificacaodb',
});




// Lê o nome do interessado
const nome = question('Digite o nome do interessado: ');

// Lê as notas dos 5 exames
const notas = [];
for (let i = 1; i <= 5; i++) {
  const nota = parseInt(question(`Digite a nota do exame ${i}: `));
  notas.push(nota);
}

// Calcula a média das notas
const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

// Verifica a classificação do interessado
let classificacao;
if (media >= 7.0 && notas.every(nota => nota >= 7.0)) {
  classificacao = 'A';
} else if (notas[0] >= 7.0 && notas[1] >= 7.0 && notas[3] >= 7.0 &&
           (notas[2] < 7.0 || notas[4] < 7.0)) {
  classificacao = 'B';
} else if (notas[0] >= 7.0 && notas[1] >= 7.0 &&
           (notas[2] >= 7.0 || notas[3] >= 7.0) && notas[4] < 7.0) {
  classificacao = 'C';
} else {
  classificacao = 'Reprovado';
}

// Exibe a classificação do interessado
console.log(`${nome} foi classificado como ${classificacao}.`);







con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql =`INSERT INTO classificacaodb.classificacao (Nome, NotaI, NotaII, NotaIII, NotaIV, NotaV, Media, Classificacao) VALUES ('${nome}', ${notas[0]}, ${notas[1]}, ${notas[2]},${notas[3]},${notas[4]}, ${media},' ${classificacao}');`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});






