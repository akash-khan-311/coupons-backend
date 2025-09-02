import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import router from "./app/routes";
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://expenses-tracker-frontend-flax.vercel.app",
];
// Parsers
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(cookieParser());

// Application Routes
app.use("/api/", router);

app.get("/api/", (req: Request, res: Response) => {
  res.send("Cupons API Live Now 1");
});

app.get("/", (req: Request, res: Response) => {
  const name = "Cupons server live now";
  res.send(name);
});

export default app;
