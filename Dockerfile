FROM node:5

WORKDIR /opt/agevio-react-demo

COPY . /opt/agevio-react-demo
RUN npm install

CMD $(npm bin)/brunch watch --server
