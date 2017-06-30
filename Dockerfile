FROM node:8.1-alpine

RUN mkdir /bftn
RUN mkdir /july12
COPY package.json /bftn
COPY _src/package.json /july12
RUN cd /bftn; npm install
RUN cd /july12; npm install
