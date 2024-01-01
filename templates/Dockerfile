FROM alpine:latest

ENV SERVICE_NAME "{{ServiceName}}"
ENV SERICE_TYPE "{{ServiceType}}"

{% for command in Dockerfile.preInstallCommands %}
{{ command }}
{% endfor %}

RUN {{ Dockerfile.InstallCommand}}

{% for command in Dockerfile.postInstallCommands %}
{{ command }}
{% endfor %}


RUN "/bin/bash"
