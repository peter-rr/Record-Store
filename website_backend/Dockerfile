FROM node:18

WORKDIR /user/website_backend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start"]

