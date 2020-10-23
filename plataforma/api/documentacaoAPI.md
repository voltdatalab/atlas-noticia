---
# Page settings
layout: default
keywords:
comments: false
atualizacao:

# Hero section
title: Documentação da API
description: Entenda os endpoints e o retorno de dados
links: Para se cadastrar na API, <a href='https://api.atlas.jor.br/register' target='_blank'>clique aqui</a>.

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

<a href="{{ site.baseurl }}/plataforma/API/utilizarAPI"><button class="btn btn--dark btn--rounded btn--w-icon" style="display:inline"> Cadastre-se na API</button></a> <a href="{{ site.baseurl }}/plataforma/api/utilizarAPI }}"><button class="btn btn--dark btn--rounded btn--w-icon" style="display:inline"> Saiba como usar </button></a>

## 1. Sobre a documentação

Seja bem vindo à documentação da API do Atlas da Notícia.

O **Atlas da Notícia** é uma iniciativa para mapear veículos produtores de notícias – especialmente de jornalismo local – no território brasileiro.

Esta é uma API que implementa o protocolo `REST` para a comunicação com os sistemas com uma autenticação do tipo JWT para a segurança das aplicações.

Esta página contém aspectos mais técnicos sobre a API e seu uso. Caso ainda esteja no começo da sua experiência com a APIs e de compreensão de *endpoints*, por favor recorra primeiro a [este documento](../utilizarAPI), que detalha o passo a passo inicial para usar esse recurso.

---

## 2. Autenticação

A API conta com o padrão JWT para autenticar seus usuários.

Para que você possa autenticar, é necessário ter um usuário cadastrado no nosso sistema. Caso ainda não tenha, [faça cadastro aqui](https://api.atlas.jor.br/register).

Para acessar os endpoints da API você deve usar o token como Bearer, incluindo-o no Header de sua requisição.

Com o usuário cadastrado, você pode realizar uma solicitação `POST` na nossa API com as seguintes informações:


### 2.1 Endpoint

`https://api.atlas.jor.br/api/v1/auth/login`

#### 2.2.1 JSON Request

```
{
"email": "seu@email",
"password": "sua senha"
}
```

#### 2.2.2 Resposta com o token será enviada para você

```
        {
            "access_token": "seu_token",
            "token_type": "bearer",
            "expires_in": 3600
        }
```

### 2.3 Renovando o token

Para renovar o token da sua aplicação, basta realizar o refresh do mesmo pela API. Neste Endpoint, você vai realizar um POST passando o token como Bearer token no Header da Requisição de acordo com o exemplo abaixo:

#### 2.3.1 Endpoint

`https://api.atlas.jor.br/api/v1/auth/refresh`

Resposta com o novo token será enviada para você, no mesmo formanto do primeiro token.

### 2.4 Colunas do JSON do token

| COLUNA       | VALOR                                  |
|--------------|----------------------------------------|
| access_token | Token de acesso para a API             |
| token_type   | Tipo de token                          |
| expires_in   | Tempo em segundos de validade do token |

---

## 3. Endpoints de dados

Endpoints são as URL's que a API provê para o retorno dos dados. A API do Atlas da Notícia possui diversos endpoints, cada um retornando um conjunto diferente de informações.

A URL base da aplicação é: `https://api.atlas.jor.br/`

A aplicação tem um controle de versão, caso a API seja atualizada de maneira a impactar nas aplicações-clientes. A versão é sempre colocada após a URL base: `https://api.atlas.jor.br/api/versão`

A url então deve ficar no seguinte formato: `https://api.atlas.jor.br/api/v1`

Após a versão, é necessário incluir o endpoint desejado para realizar a busca.

### 3.1 Filtros

A API é preparada para receber filtros de acordo com os campos desejados na consulta. Para facilitar a descoberta dos campos, a aplicação dispõe para cada endpoint, um método que retorna os campos disponíveis.

Os tipos de filtros disponíveis são:

| TIPO         | REPRESENTAÇÃO                  | DESCRIÇÃO                                                                               |
|--------------|--------------------------------|-----------------------------------------------------------------------------------------|
| Equalidade   | Parâmetro padrão na URL        | É um parâmetro comum na URL, baseado nos campos disnívies no endpoint                   |
| Parcialidade | lk                             | É o LIKE do SQL, onde temos uma busca parcial de um conteúdo do tipo String             |
| Agrupamento  | Parâmetro do tipo array na URL | É o IN do SQL. Para que o sistema filtre nesse formato, é necessário enviar como array. |
| Maior Igual  | gt                             | Define o início de um range de dados.                                                   |
| Menor Igual  | lt                             | Define o fim de um range de dados.                                                      |

#### 3.1.2 Exemplos de filtros

- Equalidade: `https://api.atlas.jor.br/api/v1/endpoint?parametro=valor`

- Parcialiade: `https://api.atlas.jor.br/api/v1/endpoint?parametro[lk]=valor`

- Agrupamento: `https://api.atlas.jor.br/api/v1/endpoint?parametro[]=valor1¶metro[]=valor2...`

- Maior Igual: `https://api.atlas.jor.br/api/v1/endpoint?parametro[gt]=valor`

- Menor Igual: `https://api.atlas.jor.br/api/v1/endpoint?parametro[lt]=valor`

- Between: `https://api.atlas.jor.br/api/v1/endpoint?parametro[gt]=valor¶metro[lt]=valor`

#### 3.1.3 Campos

A API conta com a possibilidade de filtrar quais campos serão retornados. Para isso, é necessário enviar um parâmetro na url chamado `field`.

Exemplo: `https://api.atlas.jor.br/api/v1/endpoint?field[]=campo_1&field[]=campo_2&...`

---

## 4. Retorno de dados por endpoints

### 4.1 Atlas Analytic

Endpoint que retorna uma lista de veículos de acordo com os filtros.

#### 4.1.2 Retorna os dados

GET: `/data/analytic`

#### 4.1.3 Retorna as definições

GET: `/data/analytic/definitions`

Retorno (Definições):

        [
          "id",
          "nome_veiculo",
          "fonte",
          "segmento",
          "cidade",
          "cod_mun_ibge",
          "estado",
          "regiao",
          "address",
          "annotations",
          "email",
          "num_funcionarios",
          "periodicity",
          "another_periodicity",
          "eh_jornal",
          "eh_site_pago",
          "data_fechamento"
        ]

#### 4.1.4 Retorno do endpoint (amostra)

        [
          {
            "id": 5114,
            "nome_veiculo": "A GAZETA DO ACRE",
            "fonte": "Atlas da Notícia",
            "segmento": "Impresso",
            "cidade": "Rio Branco",
            "cod_mun_ibge": "1200401",
            "estado": "AC",
            "regiao": "Norte",
            "address": "Av Antonio da Rocha Viana, 1503. Vila Ivonte",
            "annotations": null,
            "email": "agazeta.jornal@gmail.com",
            "num_funcionarios": "6 a 9 colaboradores",
            "periodicity": "daily",
            "another_periodicity": null,
            "eh_jornal": 1,
            "eh_site_pago": 0,
            "data_fechamento": null,
            "business_models": [
              {
                "id": 1,
                "name": "Assinatura\/paywall",
                "created_at": "2019-10-29 00:21:45",
                "updated_at": "2019-10-29 00:21:45",
                "deleted_at": null,
                "pivot": {
                  "media_id": 5114,
                  "business_model_id": 1
                }
              }
            ],
            "features": [
              {
                "id": 4,
                "name": "Noticiário em tempo real",
                "created_at": "2019-10-29 00:21:45",
                "updated_at": "2019-10-29 00:21:45",
                "deleted_at": null,
                "pivot": {
                  "media_id": 5114,
                  "feature_id": 4
                }
              },
              {
                "id": 5,
                "name": "Opinião\/colunistas",
                "created_at": "2019-10-29 00:21:45",
                "updated_at": "2019-10-29 00:21:45",
                "deleted_at": null,
                "pivot": {
                  "media_id": 5114,
                  "feature_id": 5
                }
              },
              {
                "id": 7,
                "name": "Possui alguma edição impressa",
                "created_at": "2019-10-29 00:21:45",
                "updated_at": "2019-10-29 00:21:45",
                "deleted_at": null,
                "pivot": {
                  "media_id": 5114,
                  "feature_id": 7
                }
              },
              {
                "id": 8,
                "name": "Redes sociais",
                "created_at": "2019-10-29 00:21:45",
                "updated_at": "2019-10-29 00:21:45",
                "deleted_at": null,
                "pivot": {
                  "media_id": 5114,
                  "feature_id": 8
                }
              }
            ],
            "collaborators": [
              {
                "id": 3,
                "name": "Estudante",
                "created_at": "2019-10-29 00:21:45",
                "updated_at": "2019-10-29 00:21:45",
                "deleted_at": null,
                "pivot": {
                  "media_id": 5114,
                  "collaborator_id": 3
                }
              }
            ],
            "media_channels": [
              {
                "id": 249,
                "channel_id": 1,
                "link": "https:\/\/agazetadoacre.com\/",
                "media_id": 5114,
                "created_at": "2019-10-29 00:24:32",
                "updated_at": "2019-10-29 00:24:32",
                "deleted_at": null,
                "channel": {
                  "id": 1,
                  "name": "Site",
                  "text_hint": "Cole aqui a URL do veículo, se houver. É um item importante para nós, e nos ajudará na validação de sua sugestão - mas entendemos que alguns veículos nem site têm, por isso não é obrigatório. Agradecemos o esforço!",
                  "created_at": "2019-10-29 00:21:45",
                  "updated_at": "2019-10-29 00:21:45",
                  "deleted_at": null
                }
              },
              {
                "id": 1100,
                "channel_id": 2,
                "link": "https:\/\/twitter.com\/agazetadoacre",
                "media_id": 5114,
                "created_at": "2019-10-29 00:24:32",
                "updated_at": "2019-10-29 00:24:32",
                "deleted_at": null,
                "channel": {
                  "id": 2,
                  "name": "Twitter",
                  "text_hint": "Se houver, favor colocar link direto para a conta - se souber apenas o nome (ex. @observatório), acrescente antes https:\/\/twitter.com\/@nome  da pagina",
                  "created_at": "2019-10-29 00:21:45",
                  "updated_at": "2019-10-29 00:21:45",
                  "deleted_at": null
                }
              },
              {
                "id": 1653,
                "channel_id": 3,
                "link": "https:\/\/www.facebook.com\/A-Gazeta-do-Acre-208579685881525\/",
                "media_id": 5114,
                "created_at": "2019-10-29 00:24:32",
                "updated_at": "2019-10-29 00:24:32",
                "deleted_at": null,
                "channel": {
                  "id": 3,
                  "name": "Facebook",
                  "text_hint": "Se houver, favor colocar link direto para a conta - se souber apenas o nome (ex. @observatório), acrescente antes https:\/\/facebook.com\/@nome  da pagin",
                  "created_at": "2019-10-29 00:21:45",
                  "updated_at": "2019-10-29 00:21:45",
                  "deleted_at": null
                }
              }
            ]
          }
        ]


#### 4.1.5 Abaixo o que cada coluna representa

| COLUNA                   | VALOR                                                                                         |
|--------------------------|-----------------------------------------------------------------------------------------------|
| id                       | Identificação do veículo                                                                      |
| nome_veiculo             | Nome do veículo                                                                              |
| fonte                    | Em qual plataforma esses dados foram inputados                                                |
| segmento                 | Segmento principal                                                                            |
| cidade                   | Cidade onde está o veículo                                                                    |
| cod_mun_ibge             | Código do município no IBGE                                                                   |
| estado                   | Estado do veículo                                                                             |
| regiao                   | Região do veículo                                                                             |
| address                  | Endereço do veículo                                                                           |
| annotations              | Observações sobre o veículo                                                                   |
| email                    | Email do veículo                                                                              |
| num_funcionarios         | Número de funcionários do veículo                                                             |
| periodicity              | Periodicidade do veículo                                                                      |
| another_periodicity      | Se a periodicidade for diferente das disponíveis, esse campo vai conter o texto explicando.   |
| eh_jornal                | Diz se o veículo é um jornal. 1 - Sim, 0 - Não                                                |
| eh_site_pago             | Diz se o veículo é financiado por alguém. 1 - Sim, 0 - Não                                    |
| data_fechamento          | Se houver data de fechamento, aqui ela estará descrita.                                       |
| business_models          | Modelos de negócios do veículo. Poder ter de 0 a n. (Array)                                   |
| features                 | Características do veículo. Poder ter de 0 a n. (Array)                                       |
| collaborators            | Tipos de colaboradores que contribuíram par aos dados do veículo. Poder ter de 0 a n. (Array) |
| media_channels           | Canais de mídia do veículo. Poder ter de 0 a n. (Array)                                       |
| media_channels.n.channel | Definição do canal de mídia do veículo                                                        |

---

### 4.2 Cidades sem veículos (agrupamento por região)

Endpoint que retorna um agregado com a quantidade de cidades sem veículos por região.

Esse é o principal endpoint, que devolve todas as colunas brutas do nosso banco de dados.

#### 4.2.1 Retorna os dados

GET: `/data/qtd-cities-without-media-region`

#### 4.2.2 Retorna as definições

GET: `/data/qtd-cities-without-media-region/definitions`

#### 4.2.3 Retorno (Definições):

        [
          "regiao",
          "qtd_cidades",
          "qtd_desertos"
        ]

#### 4.2.4 Retorno do endpoint


        [
          {
            "regiao": "Centro-Oeste",
            "qtd_cidades": 467,
            "qtd_desertos": 224
          },
          {
            "regiao": "Nordeste",
            "qtd_cidades": 1794,
            "qtd_desertos": 1146
          },
          {
            "regiao": "Norte",
            "qtd_cidades": 450,
            "qtd_desertos": 315
          },
          {
            "regiao": "Sudeste",
            "qtd_cidades": 1668,
            "qtd_desertos": 633
          },
          {
            "regiao": "Sul",
            "qtd_cidades": 1191,
            "qtd_desertos": 544
          }
        ]

#### 4.2.5 Abaixo o que cada coluna representa

| COLUNA       | VALOR                                       |
|--------------|---------------------------------------------|
| regiao       | Nome da Região.                             |
| qtd_cidades  | Quantidade de cidades na região.            |
| qtd_desertos | Quantidade de cidades que não tem veículos. |


### 4.3 Cidades sem veículos por estado

Endpoint que retorna um agregado com a quantidade de cidades sem veículos por estado.

#### 4.3.1 Retorna os dados

GET: `/data/qtd-cities-without-media-state`

#### 4.3.2 Retorna as definições

GET: `/data/qtd-cities-without-media-state/definitions`

#### 4.3.3 Retorno (Definições)

        [
          "estado",
          "qtd_cidades",
          "qtd_desertos"
        ]

#### 4.3.4 Retorno do endpoint

        [
          {
            "estado": "AC",
            "qtd_cidades": 22,
            "qtd_desertos": 16
          },
          {
            "estado": "AL",
            "qtd_cidades": 102,
            "qtd_desertos": 58
          },
          {
            "estado": "AM",
            "qtd_cidades": 62,
            "qtd_desertos": 42
          }
        ]

#### 4.3.5 Abaixo o que cada coluna representa

| COLUNA       | VALOR                                       |
|--------------|---------------------------------------------|
| estado       | Nome do estado.                             |
| qtd_cidades  | Quantidade de cidades no estado.            |
| qtd_desertos | Quantidade de cidades que não tem veículos. |


### 4.4 Cidades sem veículos por estado/região

Endpoint que retorna um agregado com a quantidade de cidades sem veículos por estado e região.

#### 4.4.1 Retorna os dados

GET: `/data/qtd-cities-without-media-state-region`

#### 4.4.2 Retorna as definições

GET: `/data/qtd-cities-without-media-state-region/definitions`

#### 4.4.3 Retorno (Definições)

        [
          "estado",
          "regiao",
          "qtd_desertos"
        ]

#### 4.4.4 Retorno do endpoint

        [
          {
            "estado": "GO",
            "regiao": "Centro-Oeste",
            "qtd_desertos": 120
          },
          {
            "estado": "MS",
            "regiao": "Centro-Oeste",
            "qtd_desertos": 18
          },
          {
            "estado": "MT",
            "regiao": "Centro-Oeste",
            "qtd_desertos": 86
          },
          {
            "estado": "AL",
            "regiao": "Nordeste",
            "qtd_desertos": 58
          }
        ]

#### 4.4.5 Abaixo o que cada coluna representa

| COLUNA       | VALOR                                       |
|--------------|---------------------------------------------|
| estado       | Nome do Estado.                             |
| regiao       | Nome da Região.                             |
| qtd_desertos | Quantidade de cidades que não tem veículos. |


### 4.5 Quase Desertos

Endpoint que retorna um agregado com os quase desertos de notícias por município.

#### 4.5.1 Retorna os dados:

GET: `/data/almost-deserts`

#### 4.5.2 Retorna as definições:

GET: `/data/almost-deserts/definitions`

#### 4.5.3 Retorno (Definições):

        [
          "cidade",
          "estado",
          "regiao",
          "qtd_veiculos",
          "codmun_ibge",
          "ano",
          "populacao",
          "veiculos_por_100k_hab"
        ]

#### 4.5.4 Retorno do endpoint

        [
          {
            "cidade": "Abadia de Goiás",
            "estado": "GO",
            "regiao": "Centro-Oeste",
            "qtd_veiculos": 2,
            "codmun_ibge": "5200050",
            "ano": 2018,
            "populacao": 8583,
            "veiculos_por_100k_hab": "23.3019"
          },
          {
            "cidade": "Abadia dos Dourados",
            "estado": "MG",
            "regiao": "Sudeste",
            "qtd_veiculos": 1,
            "codmun_ibge": "3100104",
            "ano": 2018,
            "populacao": 6972,
            "veiculos_por_100k_hab": "14.3431"
          }
        ]

#### 4.5.5 Abaixo o que cada coluna representa

| COLUNA                | VALOR                                         |
|-----------------------|-----------------------------------------------|
| cidade                | Nome do município.                            |
| estado                | Nome do estado.                               |
| regiao                | Nome da região.                               |
| qtd_veiculos          | Quantidade de veículos.                       |
| codmun_ibge           | Código do município no IBGE.                  |
| ano                   | Ano do levantamento do IBGE.                  |
| populacao             | População da cidade.                          |
| veiculos_por_100k_hab | Número de veículos a cada 100 mil habitantes. |


### 4.6 Veículos por 100 mil habitantes

### 4.6.1 Retorna os dados

GET: `/data/medias-100k-hab`

### 4.6.2 Retorna as definições

GET: `/data/medias-100k-hab/definitions`

### 4.6.3 Retorno (Definições)

        [
          "cidade",
          "estado",
          "regiao",
          "qtd_veiculos",
          "codmun_ibge",
          "ano",
          "populacao",
          "veiculos_por_100k_hab"
        ]

#### 4.6.4 Retorno do endpoint

        [
          {
            "cidade": "Abadia de Goiás",
            "estado": "GO",
            "regiao": "Centro-Oeste",
            "qtd_veiculos": 2,
            "codmun_ibge": "5200050",
            "ano": 2018,
            "populacao": 8583,
            "veiculos_por_100k_hab": "23.3019"
          },
          {
            "cidade": "Abadia dos Dourados",
            "estado": "MG",
            "regiao": "Sudeste",
            "qtd_veiculos": 1,
            "codmun_ibge": "3100104",
            "ano": 2018,
            "populacao": 6972,
            "veiculos_por_100k_hab": "14.3431"
          }
        ]

#### 4.6.5 Abaixo o que cada coluna representa

| COLUNA                | VALOR                                         |
|-----------------------|-----------------------------------------------|
| cidade                | Nome do município.                            |
| estado                | Nome do estado.                               |
| regiao                | Nome da região.                               |
| qtd_veiculos          | Quantidade de veículos.                       |
| codmun_ibge           | Código do município no IBGE.                  |
| ano                   | Ano do levantamento do IBGE.                  |
| populacao             | População da cidade.                          |
| veiculos_por_100k_hab | Número de veículos a cada 100 mil habitantes. |


### 4.7 Veículos por 100 mil habitantes com dados de IDHM - Por Estado/Região

Endpoint que retorna um agregado com os veículos a cada 100 mil habitantes por estado e região com dados de IDHM levantados em 2010 pelo IBGE.

*Nota importante: os dados populacionais foram atualizados para 2018*

#### 4.7.1 Retorna os dados

GET: `/data/med-idhm-2010-state-region`

#### 4.7.2 Retorna as definições

GET: `/data/med-idhm-2010-state-region/definitions`

#### 4.7.3 Retorno (Definições)

        [
          "estado",
          "regiao",
          "med_idhm",
          "med_idhm_e",
          "med_idhm_r",
          "populacao",
          "qtd_veiculos",
          "veiculos_por_100k_hab",
          "ano"
        ]

#### 4.7.4 Retorno do endpoint

        [
          {
            "estado": "DF",
            "regiao": "Centro-Oeste",
            "med_idhm": 0.824,
            "med_idhm_e": 0.742,
            "med_idhm_r": 0.863,
            "populacao": "2974703",
            "qtd_veiculos": "259",
            "veiculos_por_100k_hab": "8.7068",
            "ano": 2018
          },
          {
            "estado": "GO",
            "regiao": "Centro-Oeste",
            "med_idhm": 0.6949837398373981,
            "med_idhm_e": 0.5960731707317073,
            "med_idhm_r": 0.6840406504065039,
            "populacao": "6921161",
            "qtd_veiculos": "470",
            "veiculos_por_100k_hab": "6.7908",
            "ano": 2018
          }
        ]

#### 4.7.5 Abaixo o que cada coluna representa

| COLUNA                | VALOR                                         |
|-----------------------|-----------------------------------------------|
| estado                | Nome do estado.                               |
| regiao                | Nome da região.                               |
| med_idhm              | Média do IDHM.                                |
| med_idhm_e            | Média do IDHM Estado.                         |
| med_idhm_r            | Média do IDHM Região.                         |
| populacao             | População da cidade.                          |
| qtd_veiculos          | Quantidade de veículos.                       |
| veiculos_por_100k_hab | Número de veículos a cada 100 mil habitantes. |
| ano                   | Ano do levantamento do IBGE.                  |


### 4.8 Municípios sem veículos

Retorna dados sobre municípios que não possuem veículos jornalísticos, os chamados desertos de notícias.

#### 4.8.1 Retorna os dados

GET: `/data/cities-without-media`

#### 4.8.2 Retorna as definições

GET: `/data/cities-without-media/definitions`

#### 4.8.3 Retorno (Definições)

        [
          "codmun",
          "municipio",
          "uf",
          "regiao",
          "populacao",
          "ano"
        ]

#### 4.8.4 Retorno do endpoint

        [
          {
            "codmun": "5200100",
            "municipio": "Abadiânia",
            "uf": "GO",
            "regiao": "Centro-Oeste",
            "populacao": 19614,
            "ano": 2018
          },
          {
            "codmun": "5200159",
            "municipio": "Adelândia",
            "uf": "GO",
            "regiao": "Centro-Oeste",
            "populacao": 2517,
            "ano": 2018
          }
        ]

#### 4.8.5 Abaixo o que cada coluna representa

| COLUNA    | VALOR                        |
|-----------|------------------------------|
| codmun    | Código do município no IBGE. |
| municipio | Nome do município.           |
| uf        | Nome do estado.              |
| regiao    | Nome da região.              |
| populacao | População da cidade.         |
| ano       | Ano do levantamento do IBGE. |
