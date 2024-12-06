import bodyParser from "body-parser";
import { Router } from "express";
const controller = require("./util");
module.exports = () => {
  const router = Router();
  router.use(bodyParser.json());
  router.use("/users", controller("users", "user_list_controller"));
  return router;
};
