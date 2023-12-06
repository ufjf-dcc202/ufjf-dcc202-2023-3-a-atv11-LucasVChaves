import { getLista, limpaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnAdicionar.addEventListener('click', adicionaItemDaEntrada);

function adicionaItemDaEntrada() {
    var conteudo = pEntrada.innerText;

    const li = document.createElement('li');
    li.textContent = conteudo;

    olItens.appendChild(li);
    pEntrada.innerText = "";
}

btnLimpar.addEventListener('click', limparItensDeLista);

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

atualizarLista();

function atualizarLista() {
    olItens.innerHTML = "";
    
    let lista = getLista();
    for(let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];

        olItens.appendChild(li);
    }
}