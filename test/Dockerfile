FROM node:24-alpine

ENV REDIS_URL=redis://redis:6379

RUN mkdir -p /src
WORKDIR /src

COPY package.json .
COPY yarn.lock .
RUN yarn install --pure-lockfile

COPY . .

RUN yarn lint
RUN yarn build

CMD ["yarn", "test"]
