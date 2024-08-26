# syntax=docker/dockerfile:1

# Set the Node.js version
ARG NODE_VERSION=18.12.0

# Use the official Node.js image
FROM node:${NODE_VERSION}-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the application files
COPY . .

# Expose the port that the application listens on
EXPOSE 3000

# Use non-root user
USER node

# Run the application
CMD ["npm", "start"]
