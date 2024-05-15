FROM node:18-alpine as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM dependencies as runner
COPY . .
CMD npm run start
