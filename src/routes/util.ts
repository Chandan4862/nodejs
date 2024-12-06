import { join } from "path";
module.exports = (moduleName: string, controllerUri: string) => {
  const path = join(
    __dirname,
    "..",
    "modules",
    moduleName,
    "controller",
    controllerUri
  );
  const Controller = require(path);
  return Controller();
};
