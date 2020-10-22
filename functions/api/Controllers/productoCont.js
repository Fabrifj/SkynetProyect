class ProductoController(){
    constructor(){
        this.collectionName = "Producto";
    }

    listProducto(response){
        Producto.find({}, function (error, producto) {
            if (error) return response.status(404).send("Error en la petición");
            if (!producto) return response.status(404).send("Producto no existe");

            response.status(202).send(producto);
        })
    }

    Producto(response, productoId){
        Producto.findById(productoId, function (error, producto) {
            if (error) return response.status(404).send("Error en la petición");
            if (!producto) return response.status(404).send("Producto no existe");

            response.status(202).send(producto);
        })
    }

    addProducto(body){
        console.log(body);
        let prod = new Producto();

        prod._id = body._id,
        prod.nombre = body.nombre,
        prod.cantidad = body.cantidad,
        prod.precio = body.precio

        prod.save();
    }

    deleteProducto(response, productoId){
        Producto.findById(productoId, function (error, producto){
            if (error) return response.status(404).send("Error en la petición");
            if (!producto) return response.status(404).send("Producto no existe");

            producto.remove(function (error) {
                if (error) return response.status(404).send("Error en la petición");
                response.status(202).send("Producto borrado");
            })
        })
    }

    updateProducto(response, productoId, update){
        Producto.findByIdAndUpdate(productoId, update, funcion(error, producto){
            if(error) return response.status(404).send("Error en la petición");
            if(!producto) return response.status(404).send("Producto no existe");

            response.status(202).send("Producto actualizado");
        })
    }

    module.exports = ProductoController;
}