FROM 927373803645.dkr.ecr.us-east-1.amazonaws.com/nate-docker-production/codehub-ui-base:latest
MAINTAINER Nate Solomon<solomon_nathaniel@bah.com>
LABEL application=codehub-dev

WORKDIR /app

# Set the app version and copy the application source
ARG app_version
ENV APP_VERSION=${app_version}
COPY . /app
COPY nginx.conf /etc/nginx
RUN cat /etc/nginx/nginx.conf
COPY install_run_script.sh /app
RUN chmod +x /app/install_run_script.sh
RUN /app/install_run_script.sh
EXPOSE 80 9000
# Install module dependencies
CMD ["nginx", "-g", "daemon off;"]
