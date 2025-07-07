# Stage 1: Builder
FROM node:20-alpine AS builder

# Update and upgrade packages
RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npm install -g npm@latest

# Copy app source
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

# Update and upgrade packages
RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY tsconfig.json ./

# Install only production dependencies
RUN npm install --omit=dev
RUN npm install -g npm@latest

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start the server
CMD [ "node", "-r", "tsconfig-paths/register", "dist/index.js" ]
