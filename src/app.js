import cors from "cors";
import express from "express";
import productsRoutes from "./routes/productRoutes.js";

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routing
app.use("/products", productsRoutes);

export default app;
