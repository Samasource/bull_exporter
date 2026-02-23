FROM node:24-alpine

RUN mkdir -p /src
WORKDIR /src

COPY package.json .
COPY yarn.lock .
RUN yarn install --pure-lockfile

COPY . .

RUN yarn lint
RUN yarn build
RUN yarn test
