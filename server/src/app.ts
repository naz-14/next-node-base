import express from "express";
import router from "./routes";
const app = express();

app.get("/", router);

export default app;
