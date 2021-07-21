FROM node:12.18.3
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
RUN npm install pm2 -g

COPY . .

CMD ["pm2-runtime", "server/index.js"]