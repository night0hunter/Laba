FROM node AS builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm i
RUN npm install -g gulp

COPY . ./

RUN npm run build


FROM nginx
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist ./
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]