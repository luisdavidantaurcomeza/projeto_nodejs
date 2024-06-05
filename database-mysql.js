import { randomUUID } from "node:crypto";
import {mysql} from './conexao.cjs'
import { title } from "node:process";



export class DatabaseMemory{

     async list(search){   
        let videos
        
        if (search) {
            videos = await mysql `select * from videos where title ilike "%${search}%"`;
        } else{
            videos = await mysql `select * from videos`;
        }
        return videos;

        }
        
        
   


     async create(video) {
        const videoId = randomUUID();
        const {title, description, duration} = video;

        await mysql `insert into videos (id, title, description, duration) VALUES(${videoId}, ${title}, ${description}, ${duration})`;

        
    }

    update(id, video){

    }

    delete (id) {
    }
}
