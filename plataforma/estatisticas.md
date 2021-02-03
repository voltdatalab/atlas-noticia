---
# Page settings
layout: default
keywords: jornalismo, veículos de comunicação, atlas da notícia, desertos de notícias
comments: false
atualizacao: 3 de fevereiro de 2021

# Hero section
title: 'Estatísticas v.4'
description: "Principais análises sobre o maior mapeamento de veículos de jornalismo no Brasil"
links: Acesse nossa interface de consulta dos dados brutos <a href='../consulta'>neste link</a>

# Author box
author:
    title:
    title_url:
    #external_url: true
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

<a href="{{ site.baseurl }}/plataforma/sobre/metodologia"><button class="btn btn--dark btn--rounded btn--w-icon">Acessa a metodologia completa aqui</button></a>

<a href="{{ site.baseurl }}/plataforma/consulta"><button class="btn btn--dark btn--rounded btn--w-icon">Acesse os dados aqui</button></a>

{% for dados in site.data.dados_basicos %}

### {{ dados.titulo }}

#### {{ dados.subtitulo }}

{{ dados.desc }}

![]({{ dados.chart }})

{% endfor %}
