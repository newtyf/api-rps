ARG MONGO_URI_ATLAS

#? stage fot install dependecies for the app
FROM node:18-alpine3.16 AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production
# or RUN npm ci

#? stage fot build the app
FROM node:18-alpine3.16 AS builder
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

#? stage for run the app
FROM node:18-alpine3.16 AS runner
WORKDIR /app

# DEFINE ENVIRONMENT VARIABLES
ENV NODE_ENV=production
ENV MONGO_URI=$MONGO_URI_ATLAS
ENV PORT=3002

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 api

COPY --from=builder --chown=api:nodejs /app/dist ./dist

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json


USER api

EXPOSE 3002

CMD ["npm", "start"]
