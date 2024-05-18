FROM node:lts-alpine

WORKDIR /app

ENV HOME=/tmp
ENV TZ Europe/Oslo

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
