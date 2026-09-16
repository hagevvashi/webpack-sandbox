FROM nginx:1.31.6

RUN mkdir /wwwroot
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN service nginx start
