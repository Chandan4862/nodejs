import express from "express";
const { setup, container } = require("./container");
setup().then(() => {
  const server = container.resolve("server");
  server.start();
});
