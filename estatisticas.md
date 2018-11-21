---
# Page settings
layout: default
keywords: jornalismo, veículos de comunicação, atlas da notícia
comments: false
atualizacao:

# Hero section
title: Estatísticas V.2.0
description: Os principais dados sobre o levantamento e o mapeamento de veículos de comunicação e jornalismo no Brasil

# Author box
author:
    title:
    title_url:
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

### Mapeando os desertos de notícia

|                                             | resultados                                                             |
|---------------------------------------------|------------------------------------------------------------------------|
| **Total de veículos mapeados**              | 12.467 (impresso + online + rádio + televisão)                         |
| **Total de cidades mapeadas**               | 2.710 (~49% dos municípios brasileiros)                                |
| **Habitantes em não desertos**              | 177 milhões (~85% da população)                                        |
| **Deserto de notícias**                     | 2.860 (~52% dos municípios brasileiros)                                |
| **Habitantes em desertos**                  | 30 milhões (~15% da população)                                         |
| **Quase desertos**                          | 1.648 (30% dos municípios possuem apenas 1 ou 2 veículos de jornalismo)|
| **Habitantes em quase desertos**            | 34 milhões (~15% da população)                                         |
| **Desertos + Quase Desertos**               | 4.508 (~80% dos municípios brasileiros)                                |
| **Habitantes em desertos + quase desertos** | 64 milhões (~31% da população nacional)                                |

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/charts/atlas2.0_total_por_meio.svg)

#### **Nota importante**
Os dados não são diretamente comparáveis com o [primeiro levantamento](../atlas1/) feito em novembro de 2017, considerando que na ocasião foram considerados apenas desertos de notícias em relação a jornais impressos e veículos online. Em julho de 2018, os desertos foram calculados apenas para rádio e televisão.

Agora, pela primeira vez, o levantamento inclui todas as mídias.

Além disso, as análises anteriores usaram dados populacionais do Censo de 2010, ao passo que a versão mais recente utiliza dados mais atuais, de 2017.



---

### Tabelas completas e bancos de dados

| dado                               | descrição                                                                                                                                                                       | arquivo             | link                                                                                                 |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|------------------------------------------------------------------------------------------------------|
| Banco de dados do Atlas da Notícia | Arquivo principal. Inclui todas as tabelas do Atlas: v.1 revisada; v.2; agregado de v.1 + v.2; tabelas populacionais do IBGE; tabelas com índices de IDHM; tabelas suplementares | atlas2.db           | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_fase2/atlas2.db)           |
| Dados populacionais                | Tabela populacional do IBGE para 2017                                                                                                                                           | IBGE - pop.csv      | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_fase2/IBGE%20-%20pop.csv)  |
| Tabela Atlas v.1.0                 | Tabela revisada com dados do primeiro levantamento do Atlas da Notícia                                                                                                          | atlas_1.csv         | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_fase2/atlas_1.csv)         |
| Tabela Atlas v.2.0                 | Tabela com dados detalhados sobre cerca de 1.000 veículos de imprensa, parte do *crowdsourcing* da segunda versão do Atlas da Notícia                                           | atlas_2.csv         |   [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/atlas_v2.csv)                                                                                                   |
| Tabela suplementar                 | Informações sobre veículos que não entraram no levantamento final (ex. veículos pertencentes ao poder público)                                                                  | info_jornalismo.csv | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_fase2/info_jornalismo.csv) |

---

### Desertos de notícias

Desertos de notícia são municípios sem veículos jornalísticos, ou seja, sem cobertura significativa de imprensa. Eles representam 51% dos municípios brasileiros, com um total de 30 milhões de pessoas.


![Desertos de notícias do Brasil](../graficos/graficos_atlas2/mapas/atlas2_explicado.png)

Por conta do vasto território brasileiro e pelo fato de municípios ao norte do país terem áreas consideravelmente maiores do que mais ao sul, podemos fazer um *zoom* em cada região para visualizarmos melhor os desertos em cada lugar.

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/mapas/atlas2_regioes_aprox_explicado.png)

###### Fonte de dados

| dado                 | descrição                                      | arquivo         | link                                                                                          |
|----------------------|------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| Desertos de notícias | Lista de municípios sem nenhum veículo mapeado | desertos_v2.csv | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/desertos_v2.csv) |

---

### Quase desertos de notícias

Há também os quase desertos, municípios que possuem apenas 1 ou 2 veículos jornalísticos. São localidades que correm o risco de se tornar desertos. Esses locais representam 30% dos municípios do Brasil, com um total de 34 milhões de pessoas.

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/mapas/desertos_quase_gradual_explicado.png)

Se colocarmos os quase desertos combinados com os desertos, para sabermos em escala única a real dimensão dos problemas enfrentados pelo jornalismo local no Brasil, temos o mapa a seguir.

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/mapas/desertos_quase_combinados_explicado.png)

Também conseguimos fazer uma aproximação por região para facilitar a visualização entre desertos, quase desertos e não desertos.

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/mapas/quase_desertos_regioes_zoom_explicado.png)

###### Fonte de dados

| dado                       | descrição                                               | arquivo               | link                                                                                                |
|----------------------------|---------------------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------------------|
| Quase desertos de notícias | Lista de municípios com apenas 1 ou 2 veículos mapeados | quase_desertos_v2.csv | [Link](https://github.com/voltdatalab/Atlas-Analytics/blob/atlas2.0/atlas_v2/quase_desertos_v2.csv) |

---

### Outras análises

#### 1. Foi constatada uma dependência ainda de Rádio e do Impresso, especialmente fora dos grandes centros (Rio de Janeiro-São Paulo-Brasília)

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/charts/atlas2.0_pct_sobre_base_por_meio.svg)

Já nos grande centros de notícias do Brasil, veículos digitais representam uma proporção bastante significativa. No município de São Paulo, sites de jornalismo representam 67% do total de veículos, ao passo que no Rio de Janeiro o nímero é 62%. No Distrito Federal, 45%.

#### 2. Municípios menores tendem a não ter cobertura satisfatória, com Norte e Nordeste com pior cenário.

- Médias populacionais
    - Desertos de notícia > **~11 mil habitantes**
    - Não desertos > **~65 mil habitantes**

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/charts/desertos_regioes.svg)

#### 3. Cidades com presença de imprensa possuem IDH maior

Há uma clara **correlação** entre presença de jornais em alguams cidades e melhor desenvolvimento humano municipal, mas ainda não é possível provar nenhum tipo de causalidade -- ou seja, não sabemos se uma coisa ocorre em decorrência da outra, apenas sabemos que elas coexistem. O mesmo vale para educação e renda.

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/charts/idhm_presenca_jornalismo.png)


![Desertos de notícias do Brasil](../graficos/graficos_atlas2/charts/escolaridade_presenca_jornalismo.png)

![Desertos de notícias do Brasil](../graficos/graficos_atlas2/charts/renda_presenca_jornalismo.png)

---

### Fechamentos de veículos

Foram mapeados os fechamentos de 81 veículos jornalísticos brasileiros desde 2011. Os dados foram obtidos junto à Associação Nacional dos Jornais (ANJ) e também via levantamento próprio do Atlas da Notícia. A tabela pode ser encontrada [neste link](https://docs.google.com/spreadsheets/d/11EQAr1iCr9QUYeL8RGrOxiKA71e45xemzUMZZ3KGcBs/edit#gid=762283206).

---

### Fontes do levantamento Atlas da Notícia 2.0



| fonte                             | total | % da base | tipo*     |
|-----------------------------------|-------|-----------|-----------|
| MCTIC                             | 6475  | 51.9%     | Atlas 2.0 |
| Secom/PR                          | 4388  | 35.2%     | Atlas 2.0 |
| Crowdsoucing Atlas da Notícia 2.0 | 856   | 6.9%      | Atlas 2.0 |
| Atlas da Notícia 1.0              | 233   | 1.9%      | Atlas 2.0 |
| Adjori-RS                         | 204   | 1.6%      | Atlas 2.0 |
| Adjori-SC                         | 129   | 1.0%      | Atlas 2.0 |
| Central de Diários                | 89    | 0.7%      | Atlas 2.0 |
| Adjori-SP                         | 62    | 0.5%      | Atlas 2.0 |
| Adjori-PR                         | 31    | 0.2%      | Atlas 2.0 |
