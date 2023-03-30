FROM node 
WORKDIR /appc
COPY . .
EXPOSE 5005
WORKDIR /appc/servere
CMD [ "npm", "start" ]