/* import 'dotenv/config';
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'treinandonode'
  });

  connection.connect(function(err){
    console.log("conexão realizada com sucesso!! ")

  });


  module.exports = connection;
 */
/*   O erro que você está vendo ocorre porque o seu arquivo conexao.js está sendo tratado como um módulo ES (ECMAScript) em vez de um módulo CommonJS. Isso acontece porque o Node.js interpreta arquivos com a extensão .js como módulos ES quando o arquivo package.json contém a chave "type": "module".

Para resolver esse problema, você pode fazer uma das seguintes opções:

Renomear o arquivo para usar a extensão .cjs:
Mude o nome do arquivo conexao.js para conexao.cjs.
Isso fará com que o Node.js trate o arquivo como um módulo CommonJS, permitindo que você use a sintaxe require.
Usar a sintaxe import:
Se você deseja continuar usando a extensão .js e manter o tratamento como módulo ES, você pode atualizar o seu código para usar a sintaxe import em vez de require.
Por exemplo:
JavaScript

import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'treinandonode'
});

connection.connect(function(err) {
    console.log("conexão realizada com sucesso!!");
}); */