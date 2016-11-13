FROM ocelotuproar/alpine-node:5.7.1

RUN mkdir -p /usr/src/app && \
  curl -o- -L https://yarnpkg.com/install.sh | bash
COPY package.json /usr/src/app/
WORKDIR /usr/src/app

RUN $HOME/.yarn/bin/yarn install

COPY . /usr/src/app

EXPOSE 8101

CMD [ "npm", "start" ]
