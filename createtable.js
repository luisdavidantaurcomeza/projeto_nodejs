// createtable.js
import { sql } from './db.js';

/* sql `DROP TABLE IF EXISTS videos;`.then(()=>{
  console.log('Tabela Apagada!!!');
})
 */

sql `
  CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  title TEXT,
  description TEXT,
  duration INTEGER
);`
.then(()=> {
  console.log('Tabela criada')
});


/* async function createTable() {
  try {
    await sql(`
      CREATE TABLE vídeos (
        id SERIAL PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
      );
    `);
    console.log('Tabela criada!');
  } catch (error) {
    console.error('Erro ao criar tabela:', error.message);
  }
}

createTable(); */