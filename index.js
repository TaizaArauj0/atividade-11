import dotenv from "dotenv";
import express from "express";
import { selectUsuarios } from "./bd.js";      
dotenv.config();

// Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Taiza Nunes de Araujo",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.get("/usuarios", async (req, res) => {
  console.log("Rota GET/usuarios solicitada");
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

import { selectUsuarios, selectUsuario } from "./bd.js";