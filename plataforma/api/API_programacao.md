---
# Page settings
layout: default
keywords:
comments: false
atualizacao:

# Hero section
title: "Tutorial de acesso à API via programação"
description: Acesse a API utilizando linguagens de programação
links: Para se cadastrar na API, <a href='https://api.atlas.jor.br/register' target='_blank'>clique aqui</a>. Acesse o GitHub do pacote R <a href='https://github.com/voltdatalab/newsatlasbr' target='_blank'>aqui</a>.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content:
        url: '#'
    next:
        content:
        url: '#'
---

<style>
p img{
  border: 1px solid #333
}
</style>

<a href="{{ site.baseurl }}/plataforma/api/utilizarAPI"><button class="btn btn--dark btn--rounded btn--w-icon" style="display:inline">Cadastre-se na API</button></a> <a href="{{ site.baseurl }}/plataforma/api/documentacaoAPI }}"><button class="btn btn--dark btn--rounded btn--w-icon" style="display:inline"> Acesse a documentação </button></a>

O acesso utilizando a linguagem de programação R ou Python segue o mesmo processo daquele obtido via aplicação, cujo tutorial [pode ser encontrado neste link]({{ site.baseurl }}/plataforma/api/API_app)

## Acesso via R

Antes de acessar diretamente a API do **Atlas da Notícia** utilizando R, considere que temos um [pacote R]({{ site.baseurl }}/plataforma/api/pacote) específico para essa linguagem, que facilita bastante o acesso aos dados.

Caso queira utilizar a API sem o pacote, vamos utilizar os pacotes `httr`, para fazer requisições ao servidor, e `jsonlite`, para converter os dados de json para formato tabular.

Para gerar seu token, é necessário fazer uma requisição `POST`. Para isso, utilize o código a seguir:

```
token = content(
    POST(url = "https://api.atlas.jor.br/api/v1/auth/login",
             body = list("email" = "email@email.com", "password" = "12345678"),
             encode = "json", handle = NULL),
        as = "text")
```

Depois dessa etapa, vamos salvar o retorno inteiro (token e metadata) como variável a partir do json retornado `token = fromJSON(token)`, e então próprio token como variável `tk <- token[[1]]`, a fim de autenticar nossa consulta à base de dados.

Com a autenticação feita, resta apenas realizar uma requisição `GET` e transformá-la em uma tabela. Abaixo, um exemplo que retorna os veículos do Estado de Rondônia.

```
tabela <- fromJSON(content(GET(url = "https://api.atlas.jor.br/api/v1/data/analytic?estado=RO",
    add_headers(Authorization = paste("Bearer", tk, sep = " "))),
    as = "text"))
```

Veja o código completo abaixo, que pode ser acessando também [neste link](https://gist.github.com/sergiospagnuolo/f7b5bdd2fc430c791746a39d99319406.js).

<script src="https://gist.github.com/sergiospagnuolo/f7b5bdd2fc430c791746a39d99319406.js"></script>

## Acesso via Python

<script src="https://gist.github.com/sergiospagnuolo/5b5583c8e18fe555cdd629f744a54799.js"></script>
