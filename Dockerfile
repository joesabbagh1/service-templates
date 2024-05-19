FROM alpine:latest

ENV SERVICE_NAME "ilovefrontend"
ENV SERICE_TYPE "frontend"


COPY myfile myfile


RUN npm install


RUN yarn build

RUN yarn start



RUN "/bin/bash"
