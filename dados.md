---
# Page settings
layout: default
keywords: jornalismo, veículos de comunicação, atlas da notícia
comments: false
atualizacao:

# Hero section
title: Dados do Atlas 2.0
description: "Acesse todos os dados e tabelas do segundo levantamento."
links: Para os dados e análises do levantamento, <a href='../estatisticas'>clique aqui</a>

# Author box
author:
    title: Acesse os gráficos
    title_url: https://drive.google.com/drive/u/0/folders/1zj6pSQuiHAnCYWshJYVOC23dpEeGZlGG
    external_url: true
    description: Em formato PNG e SVG

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

<small>Para saber mais sobre as estatísticas e análises do levantamento, [clique aqui](../estatisticas)</small>

---

### Tabelas completas e bancos de dados

Todos os dados podem ser acessados no [Github do Atlas da Notícia](https://github.com/voltdatalab/atlas-analytics). As principais tabelas e dados estão nos arquivos abaixo.

| dado                               | descrição                                                                                                                                                                       | arquivo             | link                                                                                                 |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|------------------------------------------------------------------------------------------------------|
| Banco de dados do Atlas da Notícia | Arquivo principal modelado como banco de dados (SQL). O arquivo pode ser explorado utilizando o software [DB Browser](https://sqlitebrowser.org/). Inclui todas as tabelas do Atlas: v.1 revisada; v.2; agregado de v.1 + v.2; tabelas populacionais do IBGE; tabelas com índices de IDHM; tabelas suplementares. **Atualizado com revisão em jan/2019** | atlas2.db           | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/atlas_v2.db)           |
| Tabela Atlas v.2.0 agregado        | Tabela revisada com dados agregados do primeiro e do segundo levantamentos do Atlas da Notícia. **Atualizada com revisão em jan/2019**                                                                                                        | atlas_v1_v2_agregado.csv         | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/atlas_v1_v2_agregado.csv)         |
| Tabela Atlas v.1.0                 | Tabela revisada com dados do primeiro levantamento do Atlas da Notícia                                                                                                          | atlas_1.csv         | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/atlas_v1.csv)         |
| Tabela Atlas v.2.0                 | Tabela com dados detalhados sobre cerca de 1.000 veículos de imprensa, parte do *crowdsourcing* da segunda versão do Atlas da Notícia                                           | atlas_2.csv         |   [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/atlas_v2.csv)                                                                                                   |
| Tabela suplementar                 | Informações sobre veículos que não entraram no levantamento final (ex. veículos pertencentes ao poder público)                                                                  | info_jornalismo.csv | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_fase2/info_jornalismo.csv) |
| Dados populacionais                | Tabela populacional do IBGE para 2017                                                                                                                                           | IBGE - pop.csv      | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_fase2/IBGE%20-%20pop.csv)  |
| Veículos não jornalísticos         | Tabela com veículos considerados não jornalísticos, mas que conta na base do Ministério das Comunicações e que precisa transmitir conteúdo jornalístico (ex. emissora de TV da Prefeitura)                                                                                                                                           | nao_jornalisticos.csv      | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/nao_jornalisticos.csv)  |

---

### Desertos de notícias

| dado                 | descrição                                      | arquivo         | link                                                                                          |
|----------------------|------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| Desertos de notícias | Lista de municípios sem nenhum veículo mapeado | desertos_v2.csv | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/desertos_v2.csv) |

---

### Quase desertos de notícias


| dado                       | descrição                                               | arquivo               | link                                                                                                |
|----------------------------|---------------------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------------------|
| Quase desertos de notícias | Lista de municípios com apenas 1 ou 2 veículos mapeados | quase_desertos_v2.csv | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/quase_desertos_v2.csv) |

---

### Fechamentos de veículos de jornalismo

| dado                       | descrição                                               | arquivo               | link                                                                                                |
|----------------------------|---------------------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------------------|
| Fechamentos de veículos | Lista de veículos de jornalismo fechados pelo menos desde 2011 | gsheet | [Link](https://docs.google.com/spreadsheets/d/11EQAr1iCr9QUYeL8RGrOxiKA71e45xemzUMZZ3KGcBs/edit#gid=762283206) |

---

### Política de correções e atualizações

O Atlas da Notícia 2.0 foi produzido por uma rede de cinco pesquisadores regionais que analisaram os dados fornecidos por colaboradores voluntários através do nossa campanha de crowdsourcing sob a supervisão do Volt Data Lab

O mapeamento resultante traz o melhor panorama possível com informações detalhadas sobre a existência, o meio e a periodicidade dos veículos jornalísticos no Brasil

Por se tratar de um banco de dados novo, os números devem ser considerados como estimativas, dada a natureza mutável do panorama midiático brasileiro, marcado por fechamentos e pelo surgimento de novos veículos

À medida que nosso projeto avança, iremos refinar o nosso banco de dados, identificando novos veículos e removendo aqueles que não se enquadram em nossa metodologia (veículos fechados e não jornalísticos)

Solicitamos correções e atualizações de dados. Nossa próxima edição (novembro de 2019) incorporará as novas informações a serem verificadas  por nossa equipe

###### [Indique correções para esta base](../correcoes)
