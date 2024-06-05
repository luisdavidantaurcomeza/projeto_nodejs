/* import {createServer} from 'node:http'

const server = createServer((request, response)=>{
 response.write('oi');
 return response.end();
});

server.listen(3333); */

//localhost:3333

//post localhost:3333/videos
//Delete localhost:3333/videos/1

import { fastify } from "fastify";
import conexao from './conexao.cjs';
import { title } from "node:process";

const server = fastify();
//const database = new DatabaseMemory();
const database = new conexao();


//route parameter - parametro na rota - id
//post para criar
server.post('/videos', async (request, reply) => {
   const{title, description, duration} = request.body;
     
    /* const body = request.body;
    console.log(body); */

    await database.create({
        title,
        description,
        duration,
    });

    console.log(database.list());
    return reply.status(201).send();
});


server.get('/videos', async (request, reply) => {
    const search = request.query.search;
    
    const videos = await database.list(search);

    return videos;
});

//atualizar um video:
server.put('/videos/:id', (request, reply) => {
   const videoId = request.params.id;
   const{title, description, duration} = request.body;


  database.update(videoId,{
    title,
    description,
    duration,
    

   })
   return reply.status(204).send;
});

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id;
    database.delete(videoId)

    return reply.status(204).send;
 });

server.listen({
    port:3333,
});

//CRUD - CREATE, READ, UPDATE, DELETE, PATCH


// parei às 17:32 - 46:24