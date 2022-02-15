FROM node:15

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "run", "dev"]

