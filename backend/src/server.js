import express from "express"; // expressjs dahil etme
import cors from "cors";
import dotenv from "dotenv"; //env dosyasını çalışma tanımı

import notesRoutes from "./routes/notesRoutes.js"; // router dosyasını dahil etme
import { connectDb } from "./config/db.js"; //bağlantı dosyasını dahil

import rateLimiter from "../middleware/rateLimiter.js";

dotenv.config(); //

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);

// Her gelen isteği yakalayan global middleware.
// Log yazdıktan sonra next() ile bir sonraki route’a geçer.
app.use((req, res, next) => {
  console.log(`HTTP Method: ${req.method} & Req URL: ${req.url}`);
  next();
});

// Veritabanına bağlan
connectDb();

// /api/notes yoluna gelen tüm istekleri notesRoutes dosyasına yönlendiriyoruz
app.use("/api/notes", notesRoutes);

// server'ı başlatıyoruz ve 5001 portunda dinliyor
app.listen(PORT, () => {
  console.log("Server Started on Port : ", PORT);
});
