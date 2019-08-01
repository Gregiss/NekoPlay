var animes = [];
var generos = [{name: "Ação"}, {name: "Aventura"}, {name: "Parodia"}, {name: "Faroeste"}, {name: "Romance"}, {name: "Drama"}, {name : "Comédia"}, {name : "Sci-Fi"}, {name : "Horror"}, {name: "Guerra"}, {name : "Policial/Investigação"}, {name : "Jogos / Esportes"}, {name : "Artes Marciais"}];

for(var i = 0; i < generos.length; i++){
    console.log("id:"+i+" , "+generos[i].name);
}

function addAnimes(nome, background, capa, genero){
    0, 7, 6, 2
    genero = [{id: 0}, {id: 7}, {id: 6}]; //Generos
    var newAnime = {nome: nome, background: background, capa: capa, genero};
    animes.push(newAnime);
}

function animeDestaque(){
    var ultimoAnime = animes.length - 1;
    $(".destaque").css("background-image", "url('"+animes[ultimoAnime].background+"')");
    $(".destaque h2").html(animes[ultimoAnime].nome);
}

function carrousel(){
    for(var i = 0; i < animes.length; i++){
        for(var b = 0; b < animes[i].genero.length; b++){
            $(".carrousel .before").before("<h1>"+generos[b].name+"</h1>");
            $(".carrousel .before").before("<div class='slider' data-id='"+animes[i].genero[b].id+"' id='slider"+animes[i].genero[b].id+"'><div class='off'></div></div>");
        }
        for(var b = 0; b < animes[i].genero.length; b++){
        $(".carrousel #slider"+animes[i].genero[b].id+" .off").before("<div class='anime_slider'><img src='"+animes[i].capa+"'></img></div>");
        console.log(animes[i].genero[b].id);
        }
    }
}


addAnimes("One Punch man 2", "https://www.ubackground.com/_ph/4/159111646.jpg", "https://www.gamemonday.com/wp-content/uploads/2019/04/One-Punch-Man-942019-1.jpg");

animeDestaque();

carrousel();