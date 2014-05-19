#!/bin/bash
openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -subj "/C=US/ST=NY/L=Rochester/O=NA/CN=vm-0.jjw9128.kd.io" -keyout key.pem -out cert.pem;
