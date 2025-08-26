---
title: "Docker Caching: Otimizando Seus Builds"
description: "Aprenda a usar caching no Docker para acelerar seus builds em até 70%"
pubDate: 2022-01-20
author: "Emanoel Lopes"
tags: ["docker", "devops", "caching"]
tldr: ""
---

Post bem simples e objetivo para começar bem o ano novo e sem a dor de cabeça do [CI](https://en.wikipedia.org/wiki/Continuous_integration) & [CD](https://pt.wikipedia.org/wiki/Entrega_cont%C3%ADnua) toda vez ter que instalar as dependências da sua aplicação a cada deploy.

Se seu `Dockerfile` se parece com algo desse tipo:

```docker
FROM node:8
COPY . /app
RUN npm install --production
EXPOSE 3000
CMD ["node", "app/index.js"]
```
Altere para:

```docker
FROM node:8
COPY package.json /app/package.json
RUN cd /app; npm install --production
COPY . /app
EXPOSE 3000
CMD ["node", "app/index.js"]
```

A diferença está aqui:

De

```docker
COPY . /app
RUN npm install --production
```
Para

```docker
COPY package.json /app/package.json
RUN cd /app; npm install --production
COPY . /app
```
O comando acima fará com que as dependências da sua aplicação sejam armazenadas e versionadas. O Docker verificará se houve alguma nova alteração no `package.json`. Caso não ocorra nenhuma alteração, o build acontece normalmente sem a necessidade de instalar novamente as dependências fazendo com que o deploy seja natualmente mais rápido.

### Dicas de leitura
- [Using Docker for Node.js in Development and Production ](https://dev.to/alex_barashkov/using-docker-for-nodejs-in-development-and-production-3cgp)
- [Using Docker? Don’t forget to use build caching!](https://medium.com/@aidobreen/using-docker-dont-forget-to-use-build-caching-6e2b4f43771e)
- [Top 4 Tactics To Keep Node.js Rockin’ in Docker](https://www.docker.com/blog/keep-nodejs-rockin-in-docker/)