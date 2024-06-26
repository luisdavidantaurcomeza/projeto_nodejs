/* import {createServer} from 'node:http'

const server = createServer((request, response)=>{
 response.write('oi');
 return response.end();
});

server.listen(3333); */

//localhost:3333

//post localhost:3333/videos
//Delete localhost:3333/videos/1
//arquivo server.js
import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const port = process.env.PORT || 4000;


const server = fastify();
//const database = new DatabaseMemory();
const database = new DatabasePostgres();


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

    return reply.status(201).send();
});


server.get('/videos', async (request) => {
    const search = request.query.search;
    
    const videos = await database.list(search);

    return videos;
});

//atualizar um video:
server.put('/videos/:id', async (request, reply) => {
   const videoId = request.params.id;
   const{title, description, duration} = request.body;


  await database.update(videoId,{
    title,
    description,
    duration,
    

   })
   return reply.status(204).send;
});

server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;
    await database.delete(videoId)

    return reply.status(204).send;
 });

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
});

