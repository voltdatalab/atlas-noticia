---
# Page settings
layout: default
keywords:
comments: false
atualizacao:

# Hero section
title: Atlas na mídia
description: Veja o que saiu na imprensa sobre o Atlas da Notícia
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

<style>
td a{
  text-decoration: underline
}
</style>

Acervo de reportagens publicadas sobre o **Atlas da Notícia** ou que tenham citado o levantamento. Publicou reportagem utilizando o **Atlas da Notícia**? Envie para nós no email **contato@atlas.jor.br**.

{% for paper in site.data.clipping %}{% assign count = forloop.length %}{% endfor %}


Foram identificados **{{ count }} reportagens** que citam o **Atlas da Notícia**.

<em> Última atualização em 31.jan.2021.</em>

<table>
    <col width="20px" />
    <col width="50px" />
    <col width="50px" />
    <tr>  
    <th>Ano</th>
    <th>Veículo</th>
    <th>Título</th>
    </tr>

{% for artigo in site.data.clipping %}

<tr>
<td> {{ artigo.data }}</td>
<td> {{ artigo.veiculo }}</td>
<td> <a href="{{ artigo.url }}" target="_blank">{{ artigo.titulo }}</a></td>
</tr>
{% endfor %}
</table>
