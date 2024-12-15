import mysql from "mysql2/promise";

// Konfigurasi database
const dbConfig = {
  host: "mysql.railway.internal",
  user: "root",
  password: "qdYchgfqAaRyQyTnRszHwZymDTjPdPvk",
  database: "railway",
};

// Fungsi untuk koneksi ke database
export const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};
