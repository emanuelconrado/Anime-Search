const fs =require('fs');
const arq_anime = 'anime.txt';
const path = 'anime.txt';
let animes = [];

class Anime{
    constructor(nome, epsisodes, seasons, sinopse){
        this.nome = nome;
        this.epsisodes = epsisodes;
        this.seasons = seasons;
        this.sinopse = sinopse;
    }
}

function buttomClick(){
    const input = document.querySelector(".search").value;
    readArquivo();
    searchAnime(input);
    console.log(animes);
}

function readArquivo(){
    try{
        const data = fs.readFileSync(arq_anime, 'utf-8');
        const lines = data.split('\n');
        lines.forEach(line => {
            const [nome, epsisodes, seasons, sinopse] = line.split(';');
            const anime = new Anime(nome, epsisodes, seasons, sinopse);
            animes.push(anime);
        });
    }catch(err){
        console.log(err);
        process.exit(-1);
    }
}

function searchAnime(input){
    const anime = animes.find(anime => anime.nome === input);
    if(anime){
        document.querySelector(".english-name").innerHTML = anime.nome;
        document.querySelector(".epsisodes").innerHTML = anime.epsisodes;
        document.querySelector(".seasons").innerHTML = anime.seasons;
        document.querySelector(".sinopse").innerHTML = anime.sinopse;
    }else{
        document.querySelector(".anime").innerHTML = "Anime não encontrado";
        document.querySelector(".epsisodes").innerHTML = "";
        document.querySelector(".seasons").innerHTML = "";
        document.querySelector(".sinopse").innerHTML = "";
    }
}
