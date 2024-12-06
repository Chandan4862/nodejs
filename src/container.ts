const awilix = require("awilix");
const userDao = require("./dao");
const server = require("./server");
const router = require("./routes");
const database = require("./sequelize/models");

const userListService = require("./modules/users/service/user_list_service");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

async function setup() {
  const db = await require("./db")();
  console.log("Database created");
  container.register({
    db: awilix.asValue(db),
    database: awilix.asValue(database),
    userDao: awilix.asClass(userDao).singleton(),
    server: awilix.asFunction(server).singleton(),
    router: awilix.asFunction(router).singleton(),
  });

  //modules
  container.register({
    userListService: awilix.asFunction(userListService).singleton(),
  });
}

module.exports = {
  container,
  setup,
};
