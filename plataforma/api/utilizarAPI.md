---
# Page settings
layout: default
keywords:
comments: false
atualizacao:

# Hero section
title: Como utilizar a API
description: Como funciona seu registro e seu acesso à API do Atlas da Notícia
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

A API tem a função de ser um recurso útil para construção de aplicações, automação de análises e rotinas e acesso rápido e completo a partir de sua ferramenta ou linguagem de programação de preferência.

## Formas principais de acesso

Há quatro formas principais para acessar os dados da API do **Atlas da Notícia**

1. **Iniciante**: Via [interface de consulta](https://www.atlas.jor.br/plataforma/consulta/);
2. **Intermediário**: Via aplicativos específicos para retorno de API;
3. **Avançado**: Via programação (Python, R, PHP, Javascript, Ruby etc.);
4. **Avançado**: Via [pacote R]({{ site.baseurl }}/plataforma/api/pacote), desenvolvido por nós mesmos.

## Cadastro
O primeiro passo para acessar a API do **Atlas da Notícia** é fazer um cadastro, criando seu próprio login e senha, que serão utilizados como credenciais de uso do nosso banco de dados. Note que ainda estamos aperfeiçoando nosso sistema e você pode ainda **não** receber uma confirmação.

<iframe src="https://api.atlas.jor.br/register" width="100%" height="500px" scrolling="no" seamless></iframe>

## Métodos de acesso
Por enquanto, ao fazer o registro, o único recurso disponível a você é o acesso apenas ao retorno de dados da API.  

A API funciona a partir da geração de chaves únicas (chamadas tokens), e para isso você vai precisar utilizar o usuário e senha que criou pelo portal do **Atlas da Notícia**.

Há várias ferramentas e métodos de acesso aos dados. Abaixo, listamos alguns métodos eficientes utilizando um _client_ de acesso a APIs e mediante uso de programação.

<span style="color:red;font-size:1em;line-height:1.5em;padding:15px;background-color:#ececec;display:block"> **Não perca seu login e senha**: esse registro fará com que você tenha acesso a todos os dados da API, mas, como ainda não temos um sistema público (um _backend_) que possa ser utilizado abertamente, não é possível o próprio usuário alterar suas credenciais. Caso tenha alguma dúvida e precise de uma nova senha, por favor entre mande um email para **[contato@atlas.jor.br](mailto:contato@atlas.jor.br)**, e nossa equipe emitirá uma senha nova para você.</span>

## Acesso iniciante: via Postman

Postman é um aplicativo que, entre outras coisas, facilita o acesso aos dados de uma API. Você pode fazer o download do aplicativo [neste link](https://www.getpostman.com/). Outros aplicativos e serviços similares incluem [Hoppscotch](https://hoppscotch.io/pt-br), [Google APIGee](https://cloud.google.com/apigee), [Amazon API Gateway](https://aws.amazon.com/pt/api-gateway/).

Abra o Postman e clique em `New >> Get Request`.

![postman get](../../../graficos/postman_get.png)

Na barra de naveração é necessário selecionar a opção `POST` e colocar a seguinte URL: `https://api.atlas.jor.br/api/v1/auth/login`. Essa URL vai fazer com que sua requisição de login seja feita ao servidor do *Atlas da Notícia*.

![postman get](../../../graficos/postman_barra_nav.png)

Agora é necessário colocar as credenciais necessárias para que o login seja feito. Utilize seu login e senha escolhidos no momento do registro da API.

Para isso, clique na aba `Body` e coloque copie e cole o seguinte código substituindo os valores abaixo por sua própria credencial:


```
{
    "email": "nome@email.com",
    "password": "12345678"
}
```  

Isso vai gerar um `access_token`, com o qual você vai poder retornar dados do nosso banco de dados. Esse recurso é utilizado para dar mais segurança às informações e evitar abusos a nossos servidores gratuitos.

Certifique-se de que o formato escolhido esteja com a caixa selecionada `RAW` e que o retorno seja em `JSON`, conforme as flechas indicam na figura abaixo.

![postman get](../../../graficos/postman_bearer.png)

Clique no botão azul `SEND`, o que retornará seu token mais abaixo na tela.

O próximo passo é criar uma aba nova no Postman e utilizar a função `GET`. Isso que vai retornar os dados para dentro de seu aplicativo.

Mas antes, é necessário informar à sua aplicação o token que você vai utilizar, caso contrário o servidor não vai reconhecer seu login. Clique em `Authorization` e escolha o tipo de autorização como `Type = Bearer`. Na caixa do lado
é possível colar o token que você acabou de gerar na outra aba. Lembrando que esse token se renova a cada uma hora.

Um exemplo de API que você pode testar para ver se seu retorno está funcionando é `https://api.atlas.jor.br/api/v1/data/analytic?estado=RO`, a qual retorna todos os veículos do Estado de Rondônia.

Para saber as URLs válidas, que retornam dados, é preciso ler a documentação da API e entender as combinações possíveis. Por exemplo a URL `https://api.atlas.jor.br/api/v1/data/analytic?segmento=Online&estado=SP` retorna todos os veículos online do Estado de São Paulo.

<a href="https://api.atlas.jor.br/docs"><button class="btn btn--dark btn--rounded btn--w-icon"> Acesse a documentação da API </button></a>

Basta clicar em `SEND` e ver abaixo na tela o resultado.

![postman get](../../../graficos/postman_results.png)

## Acesso avançado: via R ou Python

O acesso utilizando a linguagem de programação R ou Python é fácil e direto. [Este é o link para o gist](https://gist.github.com/sergiospagnuolo/f7b5bdd2fc430c791746a39d99319406) que contém os códigos

<script src="https://gist.github.com/sergiospagnuolo/f7b5bdd2fc430c791746a39d99319406.js"></script>
