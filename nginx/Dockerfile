FROM nginx:1.29.4

RUN mkdir /wwwroot
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN service nginx start
