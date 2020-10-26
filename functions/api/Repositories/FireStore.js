const firAdmin = require('../Adapters/SDK/FirebaseAdmi');

class FireStore{
    constructor() {
        this.db = firAdmin.firestore(); 
    }

    getCollection(collectionName) {
        return this.db.collection(collectionName);
    }

    getCollectionInstance(collectionName) {
        return this.getCollection(collectionName).orderBy('featured', 'desc').get(); //this function needs an await when is called
    }

    getCollectionInstanceFiltered(collectionName, query) {
        let collection = this.getCollection(collectionName).where(query.field, query.action, query.value);
        return collection.orderBy('featured', 'desc').get(); //this function needs an await when is called
    }

    async getCollectionList(collectionName) {
        const documents = [];
        const collectionInstance = await this.getCollectionInstance(collectionName);
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