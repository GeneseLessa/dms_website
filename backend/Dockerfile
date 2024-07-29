FROM node:20-alpine3.20

EXPOSE 3000

WORKDIR /app/

COPY package.json .
COPY index.js .

RUN npm install

CMD [ "npm", "run", "dev" ]
