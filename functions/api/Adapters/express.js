const  express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const CategoriaController = require("./../Controllers/categoriaController");
const ProductoController = require("./../Controllers/productoController");
const FacturaController = require("./../Controllers/facturaController");

class Express{
    constructor(puerto, db ){
        this.app = express();
        this.puerto = puerto;
        this.databaseRepository = db;
    }
    initialize(){
        this.app.use(bodyParser.text());
        this.app.use(bodyParser.json());
// inicializar definir puerto
        this.app.listen(this.puerto);
        console.log('la aplicacion esta escuchan el puerto  '+ this.puerto);
        //define routers
        this.DefineRoutes();
        this.configCors();
    }
    configCors() {
        this.app.use(cors({ Origin: true}));
    }
    DefineRoutes(){
        this.defineRoutesCategoria();
        this.defineRoutesProducto();
        this.defineRoutesFactura();
    }

    defineRoutesCategoria(){
        let CategoriaCont = new CategoriaController(this.databaseRepository);
        
        this.app.post('cat/add', function(request, response){
            CategoriaCont.addCategoria(request, response );
            response.status(200).send(request.body);
        })

    //get 
        this.app.get('/cat/:catId', function(request, response){
            let cursoId = request.params.cursoId;
            CategoriaCont.Categoria(response,cursoId);
        })
        this.app.get('/cat', function(request, response){    
            CategoriaCont.listCategoria(response);
        })

    //delete
        this.app.delete('/cat/del/:catId', function(request, response){
            let cursoId = request.params.cursoId;   
            CategoriaCont.deleteCategoria(response,cursoId);
        })
    // update
        this.app.put('/cat/up/:catId', function(request, response){
            let cursoId = request.params.cursoId;   
            let update = response.body
            CategoriaCont.updateCategoria(response,cursoId,update);
        })
    }
    defineRoutesProducto(){
        let ProductoCont = new ProductoController(this.databaseRepository);
        
        this.app.post('/product/add', function(request, response){
            ProductoCont.addProducto(request,response);
        })

    //get 
        this.app.get('/product/:productId', function(request, response){
            let cursoId = request.params.cursoId;
            ProductoCont.Producto(response, cursoId);
        })
        this.app.get('/product', function(request, response){    
            ProductoCont.listProducto(request,response);
            console.log(request);
        })

    //delete
        this.app.delete('/product/del/:productId', function(request, response){
            let cursoId = request.params.cursoId;   
            ProductoCont.deleteProducto(response,cursoId);
        })
    // update
        this.app.put('/product/up/:productId', function(request, response){
            let cursoId = request.params.cursoId;   
            let update = response.body
            ProductoCont.updateProducto(response,cursoId,update);
        })
    }

    defineRoutesFactura() {
        let FacturaCont = new FacturaController(this.databaseRepository);

        this.app.post('/factura/add', function (request, response) {
            FacturaCont.addFactura(request, response);
        })

        //get 
        this.app.get('/factura/:FacturaId', function (request, response) {
            let cursoId = request.params.cursoId;
            FacturaCont.Factura(response, cursoId);
        })
        this.app.get('/factura', function (request, response) {
            FacturaCont.listFactura(request, response);
        })

        //delete
        this.app.delete('/factura/del/:facturaId', function (request, response) {
            let cursoId = request.params.cursoId;
            FacturaCont.deleteFactura(response, cursoId);
        })
        // update
        this.app.put('/factura/up/:facturaId', function (request, response) {
            let cursoId = request.params.cursoId;
            let update = response.body
            FacturaCont.updateFactura(response, cursoId, update);
        })
    }
       
}module.exports = Express;