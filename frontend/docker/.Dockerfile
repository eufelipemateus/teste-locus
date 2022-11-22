FROM node:lts


WORKDIR /app

COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json

RUN npm ci
