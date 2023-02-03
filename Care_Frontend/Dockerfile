FROM node:14.19.3

WORKDIR /Frontend

COPY package.json yarn.lock ./

RUN npm install --frozen-lockfile --force 

COPY . .

CMD ["npm", "start"]