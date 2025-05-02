FROM node:18

WORKDIR /app

# Install OpenSSL and libssl-dev (for Prisma)
RUN apt-get update -y && apt-get install -y openssl libssl-dev

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Optional: generate Prisma client here if you don't migrate in build
RUN npx prisma generate

# Start the app
CMD ["npm", "run", "server"]