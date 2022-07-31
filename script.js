import {adicionarElementos, adicionarCesta} from './util.js'

window.onload = function(){

    //Declarando a lista de Objetos
    let produtos = [
        {descricao: "Mamão Papaia", preco: 8.90},
        {descricao: "Laranja", preco:3.60},
        {descricao: "Manga", preco: 5.30},
        {descricao: "Melão", preco:6.20},
        {descricao: "Melancia", preco: 4.80}
    ]

    //Chamando a função importada
    adicionarElementos(produtos);
    adicionarCesta();
}
