# Programa para classificação em uma certificação

Este é um programa em Node.js que lê as notas de 5 exames (I, II, III, IV e V) e determina a classificação do interessado na certificação. O banco de dados utilizado foi o MySQL.

## Como executar

Para executar este programa, certifique-se de ter o Node.js instalado em seu computador e um servidor MySQL ativo. Em seguida, siga as instruções abaixo:

1. Clone este repositório em sua máquina
2. Abra o terminal e navegue até o diretório onde o repositório foi clonado
3. Execute o comando `npm install` para instalar as dependências do projeto
4. Insira as credenciais do banco de dados MySQL
5. Execute o comando `node app.js` para iniciar o programa
6. Insira o nome do interessado e as notas dos 5 exames quando solicitado
7. A classificação do interessado será exibida no console.

## Classificação

A classificação do interessado é determinada pelas seguintes regras:

- A – passou em todos os exames
- B – passou em I, II e IV, mas não em III ou V
- C – passou em I e II, III ou IV, mas não em V
- Reprovado – outras situações

## Exemplo de uso

Digite o nome do interessado: Camargo

Digite a nota do exame I: 8

Digite a nota do exame II: 7

Digite a nota do exame III: 5

Digite a nota do exame IV: 9

Digite a nota do exame V: 6

Camargo foi classificado como B.


## Autor

Este programa foi desenvolvido por [Marco Leone Merini].
