---
layout: dispersao

# coloque o link para os dados
dados: atlas_slim_cidades_100khab_jornais_online.csv

title: Cidades - Educação - Jornais e Online
date: 2017-10-20
descricao: "Concentração de veículos mapeados por 100.00 habitantes em relação ao índice de escolaridade medido no IDH (IDHM-E) em 245 municípios no Brasil. Tamanho dos pontos corresponde à população. <span class='badge'>Gráfico interativo</span>"
fonte: Atlas da Notícia
category: "Grandes Cidades"

# defina as dimensões do gráfico
largura_max: 700
largura_texto: 700

# indique o nome da coluna que corresponde aos parâmetros abaixo
valor_x: IDHM_E
texto_eixo_x: IDHM-E
numero_ticks_x: 5 # a partir de 1

valor_y: vei100milh
texto_eixo_y: "Veículos mapeados"
ticks_y: "" # "%", entre aspas para porcentagens, ou qualquer sinal desejado
numero_ticks_y: 10 # a partir de 1

#indique a coluna de uma outr variável, por ex. uma categoria ou um nome
variavel_cat: cidade
subvariavel_cat: uf #acrescente uma, se houver, para a legenda

# o que essa variável representa
nome_variavel_cat: Cidade

# indique o nome da coluna que você quer distinguir por cor nos pontos.
cores: regiao # evite colocar mais de cinco

# indique o tipo de dados - csv, tsv, json
tipo_dado: csv

# indique se o link para seus dados vem de uma URL externa ou da sua pasta de dados (_data)
link_externo: nao # sim para URL externa ou não ou deixe em branco para _data

# opacidade dos círculos dos dados
opacidade: 0.8 # de 0 a 1
tamanho_pts: POP # nome da coluna que você quer dimensionar o tamanho dos pontos
tamanho_min: 3
tamanho_max: 30
tamanho: 4 # em pixels, caso queira todos os pontos com o mesmo tamanho

# escolha a fonte do título do gráfico
fonte_titulo: Futura
font_desc: Futura Light
fonte_ticks: Futura Book

#escolha as cores (HEX e RGBA), separadas por vírgulas e entre aspas - modelo "#f0027f","#02f073"
escala_um: "#188282"
escala_dois: "#821818"
escala_tres: "#386cb0"
escala_quatro: "#d79bb5"
escala_cinco: "#faa61a"

#cores dos grids (HEX e RGBA)
cor_grids: "#cdcdcd" #coloque entre aspas

# configurar tooltip
item_um: ""
item_dois:
item_tres:
---


**Fontes:** Levantamento Atlas da Notícia, com informações do [Atlas do Desenvolvimento Humano no Brasil - IDHM](http://www.atlasbrasil.org.br/2013/pt/o_atlas/idhm/)

**Notas:** Os dados sobre jornais têm referência em 2017, ao passo que os do IDHM foram publicados em 2013 como base no Censo de 2010 do Instituto Brasileiro de Geografia e Estatística (IBGE)

Foram consideradas apenas cidades com mais de 100.000 habitantes para esta análise.

**Tabela de referência:** Cidades - 100khab - Jornais + Online (dados agregados)

**Arquivos:**
- Tabela no [Google Sheets](https://docs.google.com/spreadsheets/d/1SudAc6RAQuYu4bWj_gJnuGrRmJXTP_TYMdx7huHkrbA/edit#gid=1972133213);
- Tabela de [Excel](link);
- Tabela com valores separados por vírgulas [.csv]({{baseurl/dados/atlas_slim_cidades_idhm_jornal_online_exSPRJBSB.csv}});
- Para mais formatos, acesse o [GitHub](https://github.com/voltdatalab/atlas-analytics) do Atlas da Notícia.

**Utilização**: Creative Commons 4.0, com atribuição para *Atlas da Notícia*
