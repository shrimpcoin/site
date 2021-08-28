FROM rust:latest as server-builder
ENV BUILD_PATH=/var/build
WORKDIR /app
COPY server/ .
RUN cargo build --release

FROM node:latest as site-builder
ENV BUILD_PATH=/var/build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM rust:latest as runtime
ENV BUILD_PATH=/var/build
WORKDIR app
COPY --from=server-builder /app/target/release/shrimpcoin-server /usr/local/bin
COPY --from=site-builder /app/build /var/build/
ENV ROCKET_ADDRESS=0.0.0.0
EXPOSE 8000
CMD ["/usr/local/bin/shrimpcoin-server"]
