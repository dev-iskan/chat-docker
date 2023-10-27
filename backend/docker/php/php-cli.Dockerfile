# Используем официальный образ PHP-FPM на Alpine
FROM php:8.1-cli-alpine

# Устанавливаем скрипт для быстрой установки PHP расширений
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions

# Устанавливаем PHP расширения
RUN install-php-extensions bcmath \
    apcu \
    calendar \
    mysqli \
    opcache \
    exif \
    mcrypt \
    pdo_pgsql \
    pgsql \
    zip  \
    pdo_mysql  \
    pcntl  \
    intl  \
    soap  \
    sockets \
    redis

RUN install-php-extensions @composer

# Устанавливаем дополнительные пакеты и очищаем кеш
RUN apk --no-cache add git nano && \
    rm -rf /var/cache/apk/* /tmp/*
