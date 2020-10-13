const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const Cliente = require('../models/Cliente');
const Venta = require('../models/Ventas');


// GETLL ALL PRODUCTS 
router.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {

    }
});

// SAVE PRODUCTS
router.post('/save', async (req, res) => {
    const producto = new Producto({
        cantidad: req.body.cantidad,
        categoria: req.body.categoria,
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        clientes: req.body.clientes
    });
    try {
        const savedProducto = await producto.save();
        res.json(savedProducto);
    } catch (err) {
        res.json({ message: err.message });
    }
});


// SPECIFIC PRODUCT 
router.get('/productos/:productoId', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.productoId);
        res.json(producto);
    } catch (err) {
        res.json({ message: err.message});
    }
});

// DELETE POST
router.delete('/delete/:productId', async (req, res) => {
    try{
    const removeProduct = await Producto.remove({_id: req.params.productId});
    res.json(removeProduct); 
    } catch (err) {
        res.json({message: err.message});
    }
})

// Update a product
router.put('/update/:productId', async (req, res) => {
    try {
        //console.log(req.body.productId);
        const updateProduct = await Producto.updateOne(
            { _id: req.params.productId}, 
            { $set: { cantidad: req.body.cantidad, 
                    categoria: req.body.categoria,
                    codigo: req.body.codigo,
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    clientes: req.body.clientes } }
            );
            res.json(updateProduct);
            //console.log(updateProduct);
    } catch (err) {
        res.json({ message: err.message})
    }
});

// GET ALL CLIENTS 
router.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (err) {

    }
});

// CREATE ALL CLIENTS
router.post('/save/clientes', async (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        dni: req.body.dni
    });
    try {
        const savedCliente = await cliente.save();
        res.json(savedCliente);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// PRODUCT WITH CLIENT SPECIFIC
router.get('/:_id/productos', async (req, res) => {
    const producto = await Producto.findById(req.params).populate('clientes');
    res.send(producto);
});


// SPECIFIC CLIENT 
router.get('/clientes/:clienteId', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.clienteId);
        res.json(cliente);
    } catch (err) {
        res.json({ message: err.message});
    }
});

// DELETE CLIENT    
router.delete('/clientes/delete/:clienteId', async (req, res) => {
    try{
    const removeCliente = await Cliente.remove({_id: req.params.clienteId});
    res.json(removeCliente); 
    } catch (err) {
        res.json({message: err.message});
    }
});

// UPDATE CLIENTS
router.put('/update/clientes/:clienteId', async (req, res) => {
    try {
        console.log(req.body.clienteId);
        const updateCliente = await Cliente.updateOne(
            { _id: req.params.clienteId}, 
            { $set: { nombre: req.body.nombre, 
                      apellidos: req.body.apellidos,
                      dni: req.body.dni} }
            );
            res.json(updateCliente);
    } catch (err) {
        res.json({ message: err.message})
    }
});


// GETLL ALL SALES
router.get('/ventas', async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.json(ventas);
    } catch (err) {

    }
});

// SAVE SALES
router.post('/save/ventas', async (req, res) => {
    const ventas = new Venta({
        detalle: req.body.detalle,
        fecha: req.body.fecha,
        total: req.body.total,
        clientes: req.body.clientes,
        productos: req.body.productos
    });
    try {
        const savedVentas = await ventas.save();
        res.json(savedVentas);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// PRODUCT WITH CLIENTE SPECIFIC
router.get('/:_id/ventas', async (req, res) => {
    const ventas = await Venta.findById(req.params).populate('clientes')
                                                   .populate('productos');
    res.send(ventas);
});

// SPECIFIC SALE 
router.get('/ventas/:ventaId', async (req, res) => {
    try {
        const ventas = await Venta.findById(req.params.ventaId);
        res.json(ventas);
    } catch (err) {
        res.json({ message: err.message});
    }
});


// DELETE CLIENT    
router.delete('/ventas/delete/:ventasId', async (req, res) => {
    try{
    const removeVenta = await Venta.remove({_id: req.params.ventasId});
    res.json(removeVenta); 
    } catch (err) {
        res.json({message: err.message});
    }
});

// Update a sale
router.put('/update/ventas/:ventasId', async (req, res) => {
    try {
        //console.log(req.body.productId);
        const updateVenta = await Venta.updateOne(
            { _id: req.params.ventasId}, 
            { $set: { detalle: req.body.detalle, 
                      total: req.body.total, 
                      clientes: req.body.clientes,
                      productos: req.body.productos,
                      fecha: req.body.fecha} }
            );
            res.json(updateVenta);
            //console.log(updateProduct);
    } catch (err) {
        res.json({ message: err.message})
    }
});

module.exports = router;