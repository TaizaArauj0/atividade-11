//bd.js
import pkg from "pg";
export { selectUsuarios, selectUsuario };
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

async function selectUsuarios(id) {
  const client = await connect();
  const res = await client.query(query, usuario);
  return res.rows;
}

//bd.js
async function selectUsuario(id) {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  return res.rows;
}

