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

<style>
iframe{
  border: 2px dashed #008596;
  padding: 5px 0;
}
</style>

A API tem a função de ser um recurso útil para construção de aplicações, automação de análises e rotinas e acesso rápido e completo a partir de sua ferramenta ou linguagem de programação de preferência.

## Formas principais de acesso

Há quatro formas principais para acessar os dados da API do **Atlas da Notícia**

1. **Iniciante**: Via [interface de consulta]({{ site.baseurl }}/plataforma/consulta/);
2. **Intermediário**: Via [aplicativos específicos]({{ site.baseurl }}/plataforma/api/API_app) para retorno de API;
3. **Avançado**: Via [programação]({{ site.baseurl }}/plataforma/api/API_programacao) (Python, R, PHP, Javascript, Ruby etc.);
4. **Avançado**: Via [pacote R]({{ site.baseurl }}/plataforma/api/pacote), desenvolvido por nós mesmos.

## Cadastro
O primeiro passo para acessar a API do **Atlas da Notícia** é fazer um cadastro, criando seu próprio login e senha, que serão utilizados como credenciais de uso do nosso banco de dados. Note que ainda estamos aperfeiçoando nosso sistema e você pode ainda **não** receber uma confirmação.

<strong>[Se esqueceu sua senha ou quer cadastrar uma nova, clique aqui.](https://api.atlas.jor.br/password/reset)</strong>

<iframe src="https://api.atlas.jor.br/register" width="100%" height="500px" scrolling="no" seamless></iframe>

## Métodos de acesso
Por enquanto, ao fazer o registro, o único recurso disponível a você é o acesso apenas ao retorno de dados da API.  

A API funciona a partir da geração de chaves únicas (chamadas tokens), e para isso você vai precisar utilizar o usuário e senha que criou pelo portal do **Atlas da Notícia**.

Há várias ferramentas e métodos de acesso aos dados. Abaixo, listamos alguns métodos eficientes utilizando um _client_ de acesso a APIs e mediante uso de programação.
