# how-to-remove-starting-path-from-nginx-proxy_pass

![스크린샷 2022-07-21 오후 7 12 55](https://user-images.githubusercontent.com/93635070/180189924-1e21693b-0500-4e5a-8aef-0634f173cd8b.png)

## nginx.conf

```
worker_processes 1;

events {
    worker_connections 512;
}

http {
    upstream app-1 {
        server app-1:3000;
    }

    upstream app-2 {
        server app-2:3000;
    }

    server {
        listen 80 default_server;

        include /etc/nginx/mime.types;
        root /usr/share/nginx/html;

        location / {
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Host $host;
            proxy_pass http://app-1;
        }

        location /app-2/ {
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Host $host;
            proxy_pass http://app-2/;
            sub_filter '</head>' '<base href="http://$host/app-2/" /></head>';
            sub_filter_once on;
        }
    }
}
```
