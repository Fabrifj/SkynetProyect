
class ProductoController{
    constructor(db){
        this.database = db;
        this.collectionName = "Producto";
    }

    async listProducto(response){
        try{
            let list;
            if(request.body.query) {
                list = await this.databaseRepository.listFiltered(this.collectionName, request.body.query);
            } else {
                list = await this.databaseRepository.list(this.collectionName);
            }
            response.send({
                status: 200,
                message: 'this Product list',
                payload: list
            });
        } catch(exception) {
            response.send({
                status: 500,
                message: exception
            })
        }
    }

    Producto(response, productoId){
        Producto.findById(productoId, function (error, producto) {
            if (error) return response.status(404).send("Error en la petici�n");
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
            if (error) return response.status(404).send("Error en la petici�n");
            if (!producto) return response.status(404).send("Producto no existe");

            producto.remove(function (error) {
                if (error) return response.status(404).send("Error en la petici�n");
                response.status(202).send("Producto borrado");
            })
        })
    }

    updateProducto(response, productoId, update){
        Producto.findByIdAndUpdate(productoId, update, function(error, producto){
            if(error){return response.status(404).send("Error en la petici�n");}
            if(!producto) {return response.status(404).send("Producto no existe");}

            response.status(202).send("Producto actualizado");
        })
    }
} module.exports = ProductoController;