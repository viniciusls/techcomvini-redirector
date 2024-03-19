FROM node:16.20.2-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD yarn start

EXPOSE 3000
