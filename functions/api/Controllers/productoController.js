
class ProductoController {
    constructor(databaseRepository) {
        this.ProductoController = databaseRepository;
        this.collectionName = "Producto";
    }

    async listProducto(response,request){
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

    async addProducto(request, response) {
        try {

            let productoDocument = request.body;
            let reference = await this.databaseRepository.add(productoDocument, this.collectionName);
            response.send({
                status: 200,
                message: 'Agregado',
            });

        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            })
        }
    }

    async getProducto(request, response) {
        try {
            const id = request.params.id;
            const producto = await this.databaseRepository.getOne(id, this.collectionName);
            response.send({
                status: 200,
                message: 'Este es el producto con el id solicitado',
                payload: producto
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            })
        }
    }

    async updateProducto(request, response) {
        try {
            const id = request.params.id;
            let productoNewData = request.body;
            const updateResponse = await this.databaseRepository.updateOne(id, this.collectionName, productoNewData);
            response.send({
                status: 200,
                message: 'Producto actualizado'
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            })
        }
    }

    async deleteProducto(request, response) {
        try {
            const id = request.param.id;
            const deleteResponse = await this.databaseRepository.deleteOne(id, this.collectionName);
            response.send({
                status: 200,
                message: 'Producto borrado'
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            })
        }
    }
}module.exports = ProductoController;