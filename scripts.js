const path = 'anime.txt';
const englishName = document.querySelector(".english-name");
const epsisodes = document.querySelector(".episodes");
const seasons = document.querySelector(".seasons");
const sinopse = document.querySelector(".sinopse");
const japaneseName = document.querySelector(".japanese-name");

class Anime {
    constructor(nome, englishName, japaneseName, epsisodes, seasons, sinopse) {
        this.nome = nome;
        this.englishName = englishName;
        this.japaneseName = japaneseName;
        this.seasons = seasons;
        this.epsisodes = epsisodes;
        this.sinopse = sinopse;
    }
}

function dadosColetor(input) {
    fetch(path)
        .then(response => response.text())
        .then(response => {
            const lines = response.split("\n");
            const animes = [];
            lines.forEach(line => {
                const anime = line.split(";");
                animes.push(new Anime(anime[0], anime[1], anime[2], anime[3], anime[4], anime[5]));
            });
            searchAnime(input, animes)
        });
}

function searchAnime(input, dados) {
    console.log(input);
    console.log(dados);
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].nome.indexOf(input) !== -1 || dados[i].englishName.indexOf(input) !== -1 || dados[i].japaneseName.indexOf(input) !== -1) {
            document.querySelector(".english-name").innerHTML = dados[i].englishName;
            document.querySelector(".japanese-name").innerHTML = dados[i].japaneseName;
            document.querySelector(".episodes").innerHTML = "Episodes: " + dados[i].epsisodes;
            document.querySelector(".seasons").innerHTML = "Seasons: " + dados[i].seasons;
            document.querySelector(".sinopse").innerHTML = "Sinopse:\n" + dados[i].sinopse;
            break;
        } else {
            document.querySelector(".english-name").innerHTML = "Anime not found";
            document.querySelector(".japanese-name").innerHTML = "";
            document.querySelector(".episodes").innerHTML = "";
            document.querySelector(".seasons").innerHTML = "";
            document.querySelector(".sinopse").innerHTML = "";
        }
    }
}

function buttomClick() {
    const input = document.querySelector(".search").value;
    dadosColetor(input);
}