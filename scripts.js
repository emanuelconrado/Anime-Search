const fs =require('fs')
const arq_anime = 'anime.txt'
const path = 'anime.txt'

function buttomClick(){
    const input = document.querySelector(".search").value
    searchAnime(input)
}

function lerArquivo(caminho){
    fs.readFile(caminho, 'utf-8', function(error,data){
        if(error){
            console.log('readFile: Error')
        }else{
            const splitted = data.replaceAll('\n',',').split(',', 4)
            const name = splitted[0]
            const epsisodes = splitted[1]
            const seasons = splitted[2]
            const sinopse = splitted[3]
            console.log(name, epsisodes, seasons, sinopse)

            const anime = new Anime(name, epsisodes, seasons, sinopse)
        }
    })
}

function escreveArquivo(caminho, texto){
    fs.writeFile(caminho, texto, function(error){
        if(error){
            console.error('writeFile: Error' + error.message)
        }else{
            console.log('writeFile: OK' + caminho)
        }
    })
}

function searchAnime(anime){

    for(let i = 0; i < anime.length; i++){
        if(anime[i] == anime){
            console.log(anime[i])
        }
    }
}

lerArquivo(path)

class Anime{
    constructor(nome, epsisodes, seasons, sinopse){
        this.nome = nome
        this.epsisodes = epsisodes
        this.seasons = seasons
        this.sinopse = sinopse
    }
}