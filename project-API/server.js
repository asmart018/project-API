import express from "express";
import config from "./server/envConfig";
import productRouter from "./routes/index";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler";
import { logHandler } from "./middlewares/logger";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.set("json spaces", 2);

app.use(logHandler);

app.use("/", productRouter);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
