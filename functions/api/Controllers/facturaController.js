class FacturaController {
    constructor(databaseRepository) {
        this.databaseRepository = databaseRepository;
        this.collectionName = 'Factura';
    }

    async listFactura(request, response) {
        try {
            let list;
            if (request.body.query) {
                list = await this.databaseRepository.listFiltered(this.collectionName, request.body.query);
            } else {
                list = await this.databaseRepository.list(this.collectionName);
            }
            response.send({
                status: 200,
                message: 'this Factura list',
                payload: list

            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }

    async addFactura(request, response) {
        try {
            let facturaDocument = request.body;
            let reference = await this.databaseRepository.add(facturaDocument, this.collectionName);
            response.send({
                status: '200',
                message: 'added Factura',
            });
        } catch (exception) {
            response.send({
                status: '500',
                message: exception
            });
        }
    }

    async getFactura(request, response) {
        try {
            const id = request.params.id;
            const factura = await this.databaseRepository.getOne(id, this.collectionName);
            response.send({
                status: 200,
                message: 'Esta es la factura con el id solicitado',
                payload: factura
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }

    async updateFactura(request, response) {
        try {
            const id = request.params.id;
            let facturaNewData = request.body;
            const updateResponse = await this.databaseRepository.updateOne(id, this.collectionName, facturaNewData);
            response.send({
                status: 200,
                message: 'Factura actualizada'
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }

    async deleteFactura(request, response) {
        try {
            const id = request.param.id;
            const deleteResponse = await this.databaseRepository.deleteOne(id, this.collectionName);
            response.send({
                status: 200,
                message: 'Factura borrada'
            });
        } catch (exception) {
            response.send({
                status: 500,
                message: exception
            });
        }
    }
} module.exports = FacturaController;