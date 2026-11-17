# Stage 1: Build the Vite + React production bundle
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi

COPY . .
RUN npm run build

# Stage 2: Serve static assets + PHP mailer (/send-checklist.php) on port 3005
FROM php:8.3-apache AS runtime

ENV PORT=3005

RUN sed -ri 's/Listen 80/Listen 3005/g' /etc/apache2/ports.conf \
 && sed -ri 's/<VirtualHost \*:80>/<VirtualHost *:3005>/g' /etc/apache2/sites-available/000-default.conf \
 && printf '<Directory /var/www/html>\n\tOptions -Indexes +FollowSymLinks\n\tAllowOverride All\n\tRequire all granted\n\tFallbackResource /index.html\n</Directory>\n' > /etc/apache2/conf-available/wappshot-spa.conf \
 && printf 'ServerName localhost\n' > /etc/apache2/conf-available/servername.conf \
 && a2enconf wappshot-spa servername \
 && a2enmod rewrite headers

COPY --from=builder /app/dist/ /var/www/html/

EXPOSE 3005

CMD ["apache2-foreground"]
