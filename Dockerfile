FROM node:16.15.0

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install --legacy-peer-deps

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3001

CMD ["npm", "run", "dev"]
