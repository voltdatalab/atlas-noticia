---
# Page settings
layout: default
keywords:
comments: false
atualizacao:

# Hero section
title: Tabelas do Atlas da Notícia
description: Principais tabelas do levantamento publicado em dezembro de 2019
#links: Conheça também a <a href='../equipe'>equipe do Atlas</a> e veja nossas <a href='../estatisticas'>análises</a>

# Author box
author:
    title:
    title_url: '#'
    external_url: true
    description:

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

As tabelas abaixo são alimentadas em tempo real diretamente da API do Atlas da Notícia. O tempo de carregamento pode demorar um pouco.

### Nº de desertos de notícias por região

<small>
Na API, essa tabela corresponde à URL: <br>
`https://api.atlas.jor.br/api/v1/data/qtd-cities-without-media-region`</small>

<iframe src="../tabelas/desertos_regiao.html" frameborder="no" width="100%" height="500px" seamless></iframe>


### Nº de desertos de notícias por UF
<small>
Na API, essa tabela corresponde à URL: <br>
`https://api.atlas.jor.br/api/v1/data/qtd-cities-without-media-state`</small>

<iframe src="../tabelas/desertos_uf.html" frameborder="no" width="100%" height="1250px" seamless></iframe>


### Veículos por 100 mil habitantes, agrupados por UF
<small>
Na API, essa tabela corresponde à URL: <br>
`https://api.atlas.jor.br/api/v1/data/med-idhm-2010-state-region`</small>

<small> _Arraste a tabela para o lado para ver todas as colunas_ </small>

<iframe src="../tabelas/veiculos_100khab_uf.html" frameborder="no" width="100%" height="1450px" seamless></iframe>
