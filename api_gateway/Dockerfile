# Use a Node.js image as the base
FROM node:20.5.0

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy API gateway files
COPY . .

EXPOSE 3001
CMD ["npm", "start"]
