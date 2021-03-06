FROM node:12.14

WORKDIR /usr/src/app/

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start", "--host", "0.0.0.0"]


