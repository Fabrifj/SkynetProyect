class DatabaseRepository{
    constructor(db) {
        this.db = db;
    }

    list(collectionName) {
        return  this.db.getCollectionList(collectionName);
    }

    listFiltered(collectionName, query) {
        return  this.db.getCollectionListFiltered(collectionName, query);
    }

    add(document, collectionName) {
        return  this.db.addDocument(document, collectionName);
    }

    getOne(id, collectionName) {
        return  this.db.getDocumentById(id, collectionName)
    }

    updateOne(id, collectionName, data) {
        return  this.db.updateDocumentById(id, collectionName, data);
    }

    deleteOne(id, collectionName) {
        return  this.db.deleteDocumentById(id,collectionName);
    }
}

module.exports = DatabaseRepository;