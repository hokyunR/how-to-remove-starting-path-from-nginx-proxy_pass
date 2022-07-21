FROM node:16-alpine as builder
WORKDIR /app-2
COPY . .
RUN yarn install && yarn run build

FROM nginx:alpine
COPY nginx /etc/nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app-2/dist /usr/share/nginx/html
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]