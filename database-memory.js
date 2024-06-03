import { randomUUID } from "node:crypto";
export class DatabaseMemory{

    #videos = new Map();
    //Set, Map
    //#videos = [];

    list(){
        return Array.from(this.#videos.entries());
    }


    create(video){
        const videoId = randomUUID();
        
        this.#videos.set(videoId, video);
    }

    update(id, video){
        this.#videos.set(id, video);

    }

    delete (id) {
        this.#videos.delete(id);
    }

}

/* Erro no Método .push(): O erro ocorre na função create(video):
JavaScript

create(video){
    const videoId = randomUUID();
    this.#videos.push(video);
}
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.O problema é que você está tentando usar o método .push() em um Map, mas o .push() é um método específico de arrays (como []). No caso de um Map, você deve usar o método .set() para adicionar valores.
Solução: Para corrigir o erro, substitua a linha this.#videos.push(video); pela seguinte linha:
JavaScript

this.#videos.set(videoId, video);
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.Isso irá adicionar o vídeo ao Map usando o ID gerado aleatoriamente como chave.
Código Corrigido: Aqui está a função create(video) corrigida:
JavaScript

create(video){
    const videoId = randomUUID();
    this.#videos.set(videoId, video);
}
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
Agora, quando você chamar create(video), o vídeo será adicionado corretamente ao Map */