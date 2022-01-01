FROM node:16.13.1-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD node index.js

EXPOSE 3000
