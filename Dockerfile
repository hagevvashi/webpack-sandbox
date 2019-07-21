FROM node

WORKDIR /app

RUN apt-get update -qq  \
  && rm -rf /var/lib/apt/lists/*

ENV TZ Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . /app

RUN yarn install --frozen-lockfile
