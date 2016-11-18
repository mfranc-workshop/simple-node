FROM node:6.6.0-wheezy

RUN mkdir -p /usr/src/app && \
  curl -o- -L https://yarnpkg.com/install.sh | bash
COPY package.json /usr/src/app/
WORKDIR /usr/src/app

RUN $HOME/.yarn/bin/yarn install

COPY . /usr/src/app

CMD ["npm", "start"]
