FROM php:8.2-fpm

# 必要なツールとライブラリをインストール
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libzip-dev \
    curl \
    nodejs \
    npm \
    && docker-php-ext-install pdo_mysql zip

# Composerのインストール
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 作業ディレクトリの設定
WORKDIR /var/www/html
