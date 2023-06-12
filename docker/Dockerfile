FROM node 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8888

CMD ["npm", "start"]


FROM postgres:latest

ENV POSTGRES_USER myuser
ENV POSTGRES_PASSWORD mypassword
ENV POSTGRES_DB mydatabase

COPY . .

EXPOSE 8000

