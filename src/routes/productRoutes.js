import express from "express";
import { getProducts } from "../controllers/productControllers.js";

const router = express.Router();

// Endpoint untuk mendapatkan semua produk
router.get("/", getProducts);

export default router;
