# PM Docker

# Docker Build Status


| Repository        | Status|
| ------------- |:-------------:|
| [iuno/tdm-pm](https://hub.docker.com/r/iuno/tdm-pm/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-pm.svg)|



# Development Example

Example for fast deployment of website changes

1. Create a src directory next to the Dockerfile in the jmw folder
```
-jmw
--config
--Dockerfile
--src <-- New
```

2. Edit Dockerfile
```
FROM iuno/tdm-jmw:testing

COPY config/ /usr/src/app/config/
# Set ENV Variables
ENV TDM_JMW_CONFIG config_docker
ENV NODE_ENV docker

COPY src/ /usr/src/app/src/
RUN ng build
```

