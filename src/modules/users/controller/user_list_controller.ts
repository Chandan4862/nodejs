import { Request, Response, Router } from "express";
import { define } from "../../../container_helper";
const { container } = require("../../../container");

module.exports = () => {
  const router = Router();
  const { userListService } = container.cradle;

  router.get("/hello", (req, res, next) => {
    try {
      res.send("Hello world!");
    } catch (error) {
      next(error);
    }
  });

  router.get("/:id", async (req: Request, res: Response, next: any) => {
    try {
      const result = await userListService.getUserListById(req.params.id);
      res.send(JSON.stringify(result));
    } catch (error) {
      next(error);
    }
  });

  router.post("/create", async (req: Request, res: Response, next: any) => {
    try {
      const { name, email, password } = req.body;
      const result = await userListService.createUser({
        name,
        email,
        password,
      });
      res.send(JSON.stringify(result));
    } catch (error) {
      next(error);
    }
  });

  return router;
};
