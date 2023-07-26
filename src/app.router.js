import connectionDb from "../DB/connection.js";
import userRouter from "./modules/users/users.router.js";

const bootstrap = (app, express) => {
  app.use(express.json());

  connectionDb();
  app.use("/api/v1/users", userRouter);
};

export default bootstrap;