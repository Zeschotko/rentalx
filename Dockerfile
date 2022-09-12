FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

COPY . .

COPY entrypoint.sh /entrypoint.sh

EXPOSE 3333

RUN ["chmod", "+x", "/entrypoint.sh"]
