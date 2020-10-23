
class CategoriaController{
    constructor(databaseRepository){
        this.databaseRepository = databaseRepository;
        this.collectionName = "Categoria";
    }

    listCategoria(response){
        Categoria.find({}, function (error, categoria) {
            if (error) return response.status(404).send("Error en la petici�n");
            if (!categoria) return response.status(404).send("Categoria no existe");

            response.status(202).send(categoria);
        })
    }

    Categoria(response, categoriaId){
        Categoria.findById(CategoriaId, function (error, categoria) {
            if (error) return response.status(404).send("Error en la petici�n");
            if (!categoria) return response.status(404).send("Categoria no existe");

            response.status(202).send(categoria);
        })
    }

    addCategoria(body){
        console.log(body);
        let cat = new Categoria();

        cat._id = body._id,
        cat.nombre = body.nombre

        cat.save();
    }

    deleteCategoria(response, categoriaId){
        Categoria.findById(categoriaId, function (error, categoria) {
            if (error) return response.status(404).send("Error en la petici�n");
            if (!categoria) return response.status(404).send("Categoria no existe");

            categoria.remove(function (error) {
                if (error) return response.status(404).send("Error en la petici�n");
                response.status(202).send("Categoria borrada");
            })
        })
    }

    updateCategoria(response, categoriaId, update){
        Categoria.findByIdAndUpdate(categoriaId, update, function(error, categoria){
            if(error) return response.status(404).send("Error en la petici�n");
            if(!categoria) return response.status(404).send("Categoria no existe");

            response.status(202).send("Categoria actualizada");
        })
    }

    
}module.exports = CategoriaController;