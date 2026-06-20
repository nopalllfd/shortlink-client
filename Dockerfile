FROM node:20-alpine AS builder

WORKDIR /app

ARG VITE_BASE_API=/api

COPY package*.json ./
RUN npm install

COPY . .

ENV VITE_BASE_API=${VITE_BASE_API}

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]