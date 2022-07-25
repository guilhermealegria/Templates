/* global Given, Then, When */

import Page from '../pages/ExemploPage';
const search = new Page;

Given("que acesso o site da netshoes", () => {
    search.acessarPagina()
})
Then("visualizo o site com barra de pesquisa", () => {
    search.verificarBarradePesquisa()
})