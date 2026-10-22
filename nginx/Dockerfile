FROM nginx:1.31.8

RUN mkdir /wwwroot
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN service nginx start
