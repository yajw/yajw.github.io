---
title: nginx
comments: true
date: 2021-02-17 00:00:00
tags: []
categories: 总结
---

nginx 同ip多端口转发配置

upstream api {
    server 127.0.0.1:10001 weight=10;
    server 127.0.0.1:10002 weight=10;
    server 127.0.0.1:10003 weight=10;
    server 127.0.0.1:10004 weight=10;
    keepalive 300;
}

server {
    listen 80;

    location / {
    	proxy_set_header Host $http_host;
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
