import { getAllProducts } from "../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();

    const produts_response = products.map((product) => ({
      ...product, // Salin semua properti yang ada
      kapasitas: product.kapasitas.split(',').map((item) => item.trim()), // Ubah string menjadi array
      warna: product.warna.split(',').map((item) => item.trim()), // Ubah string menjadi array
      aksesibilitas: product.aksesibilitas.split(',').map((item) => item.trim()), // Ubah string menjadi array
    }));

    res.json(produts_response);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
