import express, { Express, Request, Response } from "express";
module.exports = ({ userDao, router, database }: any) => {
  const app: Express = express();
  const port = 3000;
  app.use("/api", router);

  userDao.createUserTable().then((res: any) => {
    console.log("User table created", res);
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello worldl");
  });

  return {
    app,
    start: () => {
      database.sequelize
        .authenticate()
        .then(() => {
          app.listen(port, () => {
            console.log("Server listening at", port);
          });
        })
        .catch((err: any) => {
          console.error("Unable to connect to the database:", err);
          process.exit(1);
        });
    },
  };
};
