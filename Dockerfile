# Use an official Node.js runtime as the base
FROM node:16-alpine
 
# Set the working directory
WORKDIR /app
 
# Copy package.json and package-lock.json
Copy package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy rest of the files
COPY . .
 
# Expose the port
EXPOSE 8081
 
# Start the app
CMD ["node","server.js"]