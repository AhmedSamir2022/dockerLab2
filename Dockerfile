FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY lab.js .
EXPOSE 8080
CMD ["node","lab.js"]
