FROM --platform=linux/arm64 debian:stable AS build

RUN apt update && apt upgrade
RUN apt-get -y install nginx
RUN rm Dockerfile
# RUN apt-get -y install systemctl
WORKDIR /etc/cloudflared/

COPY cloudflare /etc/cloudflared/
RUN dpkg -i ./cloudflared-linux-arm64.deb
WORKDIR /var/www/html
COPY . /var/www/html
COPY ./proxy/nginx.conf /etc/nginx/sites-available/default
RUN rm -rf cloudflare

EXPOSE 80

CMD ["sh", "-c", "nginx -g 'daemon off;' & cloudflared tunnel run cutiePie"]
