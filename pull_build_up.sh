#!/usr/bin/env bash
set -ex

docker-compose  build --pull
docker-compose up -d
