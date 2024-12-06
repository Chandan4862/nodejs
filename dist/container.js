"use strict";
const awilix = require("awilix");
const db = require("./db");
const userDao = require("./dao");
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});
function setup() {
  container.register({
    db: awilix.asClass(db).singleton(),
    userDao: awilix.asClass(userDao).singleton(),
  });
}
module.exports = {
  container,
  setup,
};
