FROM golang:1.18 AS build

WORKDIR /usr/src/app
COPY ./main.go .
RUN go mod init example/helloGo
RUN go build .

FROM scratch
WORKDIR /app
COPY --from=build /usr/src/app .
ENTRYPOINT [ "./helloGo" ]