---
# Page settings
layout: default
keywords: jornalismo, veículos de comunicação, atlas da notícia, desertos de notícias
comments: false
atualizacao: 28 de junho de 2021

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

O levantamento do **Atlas da Notícia** faz um mapeamento geográfico da imprensa, e não uma qualificação dos veículos ou acompanhamento trabalhista. Nossos dados podem fornecer informações para estudos que sigam nessa direção, mas eles mesmos não se propõem a cobrir essas questões.

<a href="{{ site.baseurl }}/plataforma/sobre/metodologia"><button class="btn btn--dark btn--rounded btn--w-icon">Acessa a metodologia completa aqui</button></a>

<a href="{{ site.baseurl }}/plataforma/consulta"><button class="btn btn--dark btn--rounded btn--w-icon">Acesse os dados aqui</button></a>

{% for dados in site.data.dados_basicos %}

### {{ dados.titulo }}

#### {{ dados.subtitulo }}

{{ dados.desc }}

![]({{ dados.chart }})

<hr>

{% endfor %}
