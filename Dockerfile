FROM node:16.15.1-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD yarn start

EXPOSE 3000
