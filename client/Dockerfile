FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./

COPY . ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]


# Stage 2: Serve the app using Nginx
# FROM nginx:alpine
FROM nginx:1.27.4-alpine-slim

# Copy built files from the builder stage to Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
