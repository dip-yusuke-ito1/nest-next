# Stage 1: Build the application
FROM node:20.14.0-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ../../backend/package.json ../../backend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ../../backend .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:20.14.0-slim AS runner

# Set working directory
WORKDIR /app

# Copy build artifacts from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3333

# Command to run the application
CMD ["npm", "run", "start"]
