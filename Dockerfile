FROM node:8.15.1-jessie
EXPOSE 8000
RUN mkdir -p /usr/src/salah_app
WORKDIR usr/src/salah_app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm", "run", "develop"]