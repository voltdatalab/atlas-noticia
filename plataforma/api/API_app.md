---
# Page settings
layout: default
keywords:
comments: false
atualizacao:

# Hero section
title: "Tutorial básico de acesso à API"
description: Acesse a API sem saber programação com esse passo a passo detalhado
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

<style>
p img{
  border: 1px solid #333
}
</style>

<small>[Para se cadastrar na API e ver outras formas de acesso, clique aqui]({{ site.baseurl }}/plataforma/API/utilizarAPI).</small>

## Acesso via Hoppscotch

Hoppscotch é um aplicativo online gratuito direto e fácil de usar. Não possui todos recursos de outros aplicativos, como o Postman, mas facilita e muito a utilização para uso simples da API.

[Abra o site do Hoppscotch](https://hoppscotch.io/). Você pode escolher se logar via Google ou GitHub para ter uma experiência melhor, mas não é necessário para utilizar a ferramenta.

Sua área de trabalho vai estar totalmente em branco.

![]({{ site.baseurl}}/graficos/hopp_inicial.png)

### 1º Passo: retornar seu token de acesso

Para acessar a API do **Atlas da Notícia** você vai precisar estar cadastrado no nosso sistema, o que lhe permitirá gerar uma chave de acesso (ou token) para que sua aplicação possa puxar nossos dados. Isso é feito para evitar abusos nos nossos servidores, aumentado a segurança nossa e de quem usa a API.

A forma correta de conseguir seu token é realizar uma requisição via método `POST`, que solicita ao servidor o envio de dados anexados ao corpo (ou `body`) da requisição.

No canto superior direito do Hoppscotch, altere o método para `POST`, acrescentando, ao lado, a seguinte URL `https://api.atlas.jor.br/api/v1/auth/login`.

![]({{ site.baseurl}}/graficos/hopp_post.png)

Antes de enviar sua requisição para o servidor, vamos precisar também incluir suas credenciais de acesso à API -- o mesmo email e senha que você usou para se cadastrar.

Certifique-se de que o _Content Type_ esteja como `application/json` (que nada mais é do que o formato que o token vai ser entregue para você) e que o botão _Raw input_ esteja com o tick na esquerda, ou seja, desativado (também é possível fazer a requisição via _Raw input_, mas nesse caso não é necessário). Você pode também acrescentar um rótulo (_label_) como referência se quiser.

Agora basta clicar **ENVIAR**.

![]({{ site.baseurl}}/graficos/hopp_credenciais.png)

Caso tudo esteja certo com sua requisição aos nossos servidores, no fim da página você vai receber no pé da página uma mensagem de resposta de status `200` (sucesso), com o seu token logo abaixo. Você vai precisar copiar apenas do token (pode desconsiderar os outros dois campos).

Note que o prazo de validade de cada token é de 3.600 segundos, ou uma hora, a partir da qual ele não será mais válido e o processo para requisitar uma nova chave terá que ser feito novamente.

![]({{ site.baseurl}}/graficos/hopp_resposta200.png)

Com o token em mãos, podemos prosseguir para buscar os dados diretamente da API

### 2º Passo: utilizar o token

Agora vamos mudar o método, utilizando agora `GET`, com o qual, em vez de solicitar aceitação de dados enviados pelo usuário, vai pedir para o servidor enviar os dados que queremos.

Também será necessário acrescentar a autenticação de suas credenciais, mediante o uso do token que você copiou agora pouco, conforme a figura abaixo.

![]({{ site.baseurl}}/graficos/hopp_bearer.png)

### 3º Passo: retornando os dados

A parte chata, de utilização do token, já ficou para trás. Agora, tudo o que vamos fazer é trabalhar com os dados do **Atlas da Notícia**.

Nossa API funciona a partir de _endpoints_, ou seja, pontos que retornam os dados que queremos.

Como exemplo, vamos utilizar o _endpoint_ que nos retorna os dados com os números desertos de notícia (ou seja, municípios sem organizações jornalísticas) agregados por estado.

Coloque o seguinte _endpoint_ na barra de URL e clique enviar: `https://api.atlas.jor.br/api/v1/data/qtd-cities-without-media-state`

Se funcionar, no campo de resposta, no pé da página, a servidor vai retornar os dados solicitados, utilizando um formato de armazenamento de dados chamado JSON.

Voilá! Você consegui acessar os dados. Copie-os utilizando o botão no canto direito (seta vermelha da imagem).


![]({{ site.baseurl}}/graficos/hopp_retorno_dados.png)

Agora, basta utilizar um conversor de JSON para csv, como o [Konklone](https://konklone.io/json/), para que tenha os dados todos tabulados para você utilizar.

## Acesso yllvia Postman

Postman é um aplicativo que, entre outras coisas, facilita o acesso aos dados de uma API. Você pode fazer o download do aplicativo [neste link](https://www.getpostman.com/). Outros aplicativos e serviços similares incluem [Google APIGee](https://cloud.google.com/apigee), [Amazon API Gateway](https://aws.amazon.com/pt/api-gateway/).

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
