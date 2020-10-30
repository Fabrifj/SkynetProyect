const firAdmin = require('../Adapters/SDK/FirebaseAdmi');

class FireStore{
    constructor() {
        this.db = firAdmin.firestore(); 
    }

    getCollection(collectionName) {
        let coll = this.db.collection(collectionName);
        console.log("get collection");
        console.log(coll);
        return coll;
    }

    getCollectionInstance(collectionName) {
        let coll = this.getCollection(collectionName).orderBy('featured', 'desc').get(); //this function needs an await when is called
        console.log("get collectioninstance");
        console.log(coll);
        return coll;
    }

    getCollectionInstanceFiltered(collectionName, query) {
        let collection = this.getCollection(collectionName).where(query.field, query.action, query.value);
        console.log(collection);
        return collection.orderBy('featured', 'desc').get(); //this function needs an await when is called
    }

    async getCollectionList(collectionName) {
        const documents = [];
        const collectionInstance = await this.getCollectionInstance(collectionName);
        console.log("get collectionlist");
        console.log(collectionInstance);
        collectionInstance.forEach(doc => {
            documents.push({id: doc.id, ... doc.data()});     
        });
        return documents;  
    }

    async getCollectionListFiltered(collectionName, query) {
        const documents = [];    
        const collectionInstance = await this.getCollectionInstanceFiltered(collectionName, query);
        collectionInstance.forEach(doc => {
            documents.push({id: doc.id, ... doc.data()});     
        });
        return documents;  
    }

    async addDocument(document,collectionName) {
        const collection = await this.getCollection(collectionName);
        const reference = await collection.add(document);
        return reference;
    }

    async getDocumentRefById(id, collectionName) {
        const collection = await this.getCollection(collectionName);
        return collection.doc(id)
    }

    async getDocumentById(id, collectionName) {
        const documentRef = await this.getDocumentRefById(id,collectionName);
        const document = await documentRef.get();
        
        return document.data();
    }

    async updateDocumentById(id, collectionName, data) {
        let documentRef = await this.getDocumentRefById(id, collectionName);
        return documentRef.update(data)
    }

    async deleteDocumentById(id, collectionName) {
        let documentRef = await this.getDocumentRefById(id, collectionName);
        return documentRef.delete()
    }
}

module.exports = FireStore;