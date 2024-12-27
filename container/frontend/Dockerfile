# Stage 1: Build the application
FROM node:20.14.0-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ../../frontend/package.json ../../frontend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ../../frontend .

# Build the application
RUN npm run build

# Set up Japanese locale
RUN apt-get update && apt-get install -y locales
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP

# Expose the port the app runs on
EXPOSE 3333

# Set Japanese locale and timezone
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

# Command to run the application
CMD ["npm", "run", "dev"]
