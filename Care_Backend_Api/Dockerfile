FROM node

WORKDIR /App

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]