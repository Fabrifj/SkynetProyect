
class CategoriaController{
    constructor(databaseRepository) {
        this.databaseRepository = databaseRepository;
        this.collectionName = 'Categoria';
    }

    async listCategoria(response,request){
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
                status: 600,
                message: exception
            });
        }
    }

    async addCategoria(request, response) {
        try {

            let catDocument = request.body;
            let reference = await this.databaseRepository.add(catDocument, this.collectionName);
            response.send({
                status: 200,
                message: 'Agregado',
            });

        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }

    async getCategoria(request, response) {
        try {
            const id = request.params.id;
            const categoria = await this.databaseRepository.getOne(id, this.collectionName);
            response.send({
                status: 200,
                message: 'Esta es la categoria con el id solicitado',
                payload: categoria
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }

    async updateCategoria(request, response) {
        try {
            const id = request.params.id;
            let catNewData = request.body;
            const updateResponse = await this.databaseRepository.updateOne(id, this.collectionName, catNewData);
            response.send({
                status: 200,
                message: 'Categoria actualizada'
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }

    async deleteCategoria(request, response) {
        try {
            const id = request.param.id;
            const deleteResponse = await this.databaseRepository.deleteOne(id, this.collectionName); 
            response.send({
                status: 200,
                message: 'Categoria borrada'
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }
}module.exports = CategoriaController;