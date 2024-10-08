# Nicolaas Johan Jansen van Rensburg u22590732

FROM node:20

WORKDIR /app

COPY . .

RUN npm install

ENV PORT=3000

CMD ["npm", "start"]

EXPOSE 3000