import express from 'express';
import Products from '../class.js';

const router = express.Router();

let products = new Products()

router.get('/listar', (request, response) => {
    response.json(products.getProducts());
  });

router.get('/guardar', (request, response) => {
  products.addProduct(request.body);
  response.json(request.body);
  });

router.get('/listar/:id', (request, response) => {
    response.json(products.getProductsById(request.params.id));
  });  

router.put('/actualizar/:id', (request, response) => {
    response.json(products.actualizar(request.body, request.params.id));
  });

router.delete('/borrar/:id', (request, response) => {
    response.json(products.borrar(request.params.id));
  });  


export default router;
