FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon && npm install

RUN npm install -g ts-node

COPY . .

EXPOSE 3000

CMD ["nodemon", "index.ts"]
