FROM node:16 as dependencies
WORKDIR /usr/src
ADD package*.json ./
RUN npm install

FROM dependencies as build
WORKDIR /usr/src
ARG ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN echo "env: $ENV"
ENV NEXT_PUBLIC_APP_ENV=$ENV
COPY . .
RUN if [ "$ENV" != "production" ] ; then cp .env.${ENV} .env.production ; fi
RUN npm run build

FROM node:16
WORKDIR /usr/src
COPY --from=build /usr/src/ /usr/src/
ARG ENV=production
ENV NEXT_PUBLIC_APP_ENV=$ENV
ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000
EXPOSE 9229
CMD ["npm", "start"]
