---
# Page settings
layout: default
keywords:
comments: false
atualizacao:

# Hero section
title: Atlas na academia
description: Conheça os artigos que citam o Atlas da Notícia
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

Nesta seção é possível encontrar artigos e trabalhos acadêmicos cujos nossos dados ajudaram a subsidiar algum aspecto de pesquisa. Publicou artigo acadêmico utilizando o **Atlas da Notícia**? Envie para nós no email **contato@atlas.jor.br**.

{% for paper in site.data.academico %}{% assign count = forloop.length %}{% endfor %}


Foram identificados **{{ count }} artigos** acadêmicos que citam o **Atlas da Notícia**.

<em> Última atualização em 31.jan.2021.</em>

<table>
    <col width="20px" />
    <col width="50px" />
    <col width="50px" />
    <col width="50px" />
    <tr>  
    <th>Ano</th>
    <th>Instituição</th>
    <th>Autor</th>
    <th>Título</th>
    </tr>

{% for artigo in site.data.academico %}

<tr>
<td> {{ artigo.ano }}</td>
<td> {{ artigo.instituicao }}</td>
<td> <a href="{{ artigo.link }}" target="_blank">{{ artigo.titulo }}</a></td>
<td> {{ artigo.autor }}</td>
</tr>
{% endfor %}
</table>
