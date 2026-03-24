# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies needed for bcrypt and other native modules
RUN apk add --no-cache python3 make g++ curl

# Install dependencies
COPY package*.json ./
RUN npm ci

# Rebuild bcrypt for Alpine Linux
RUN npm rebuild bcrypt --build-from-source

# Copy source code
COPY tsconfig.json ./
COPY src ./src

# Build NestJS application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache curl

# Install production dependencies only
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Rebuild bcrypt for production environment
RUN npm rebuild bcrypt --build-from-source

# Copy only compiled application from builder (NOT source files)
COPY --from=builder /app/dist ./dist

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

EXPOSE 3000

# Health check - connects to health endpoint
HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=15s \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["node", "dist/main"]
