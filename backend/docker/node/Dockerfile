FROM node:16.13.0-buster AS base

RUN mkdir /app

FROM base AS development

ENV NODE_ENV=developemt

WORKDIR /app

FROM base AS production

ENV NODE_ENV=production

WORKDIR /app

COPY ./backend /app

RUN apt update && apt install ffmpeg -y

RUN npm i --save-dev \
    && npm run build
