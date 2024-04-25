# Use a Node.js image as the base
FROM node:20.5.0

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy tasks_server files
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
