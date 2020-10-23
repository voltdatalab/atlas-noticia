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
