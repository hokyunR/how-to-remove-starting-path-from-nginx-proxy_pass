FROM node:16-alpine as builder
WORKDIR /websocket-server
COPY . .
RUN yarn install
EXPOSE 5000
CMD [ "node", "index.js" ]