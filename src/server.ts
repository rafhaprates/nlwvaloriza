import "reflect-metadata";
import express from "express";
import "./database";

// @types/express
const app = express();
/**
 * GET => Buscar uma informação 
 * POST => Inserir (Criar) uma informação 
 * PUT  => Alterar uma informcao 
 * DELETE => Remover um dado
 * PATCH => Alterar uma informacao especially
 */

/*******************************
 * Tipos de parametros
 * Routes Params  => Localhost:3000/produtos/13
 * Query Params   => localhost:3000/produtos?name=teclado&description=tecladobom
 * Body Params    => {
 *  "name": "Produto1",
 *  "description": "telado bom"
 * }
 */



app.listen(3000, ()=> console.log("Servidor Iniciado") );