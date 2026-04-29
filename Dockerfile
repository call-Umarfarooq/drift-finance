# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and lock files
COPY package.json package-lock.json* pnpm-workspace.yaml* ./

# Install dependencies
RUN npm ci || npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy custom nginx configuration for React Router (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
