# CORS Proxy Server

## Setup

```
npm install
npm -g install pm2
pm2 start process.yml
```

## NGINX Configuration

```
location /cors-proxy {
  rewrite /cors-proxy(.*) /$1  break;
  proxy_pass http://localhost:8000;
}
```

## Credits

This is a fork of @afeld's https://github.com/afeld/jsonp. I am really thankful for his great work!
