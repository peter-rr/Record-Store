FROM node:18

# Create app directory
WORKDIR /user/order_service/output

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

CMD [ "node", "src/api/index.js" ]
