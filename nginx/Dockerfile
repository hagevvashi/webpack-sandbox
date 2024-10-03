FROM nginx:1.27.2

RUN mkdir /wwwroot
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN service nginx start
