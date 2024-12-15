import mysql from "mysql2/promise";

// Konfigurasi database
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "iphonekubpn",
};

// Fungsi untuk koneksi ke database
export const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};
