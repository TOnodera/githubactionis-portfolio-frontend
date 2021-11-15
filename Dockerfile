FROM node:14

RUN npm i -g @vue/cli

WORKDIR /home/node/app
COPY ./ /home/node/app
RUN chown -R node:node /home/node/app

USER node

# test AA