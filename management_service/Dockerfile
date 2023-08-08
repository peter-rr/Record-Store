FROM node:18

WORKDIR /user/management_service

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "management_service.js" ]