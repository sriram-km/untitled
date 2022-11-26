const appwrite_sdk = require('node-appwrite');

const client = new appwrite_sdk.Client();
const storage = new appwrite_sdk.Storage(client);
const account = new appwrite_sdk.Account(client);
const inputfile = appwrite_sdk.InputFile;
const ID = appwrite_sdk.ID;
const bucketID = '6381b86d13982335dbfc';

client
    .setEndpoint('http://localhost:8021/v1')
    .setProject('6380608b7cac74ca729c')
    .setKey('f4a3d1a3942c47d3c4c8820cdb6039d20988280f9fb47457307b71fbab3de7b008b4e1e35d8ce069d3c62e831afc54c42d2127d8508388cddacf2cfcf56e6e5951156fa37b3a4b85dafc3feadb86a7a7bde1ebf2a6e7e3eee0b6326b657a0e2dc3aafda821bfa99ba5115bea0bddd7ec1e833e41be4d558f7ac517c621c5846d')
    .setSelfSigned()
    ;

const getFiles = async () => {
    try {
        let response = await storage.listFiles(bucketID);
        return response;
    } catch (e) {
        console.log(e);
    }
};

const getFile = async (fileID) => {
    try {
        let response = await storage.getFileView(bucketID, fileID);
        return response;
    } catch (e) {
        console.log(e);
    }
};

const deleteFile = async (fileID) => {
    try {
        let response = await storage.deleteFile(bucketID, fileID);
        return response;
    } catch (e) {
        console.log(e);
    }
};

const createFile = async (fileID, fileName, data) => {
    try {
        let response = await storage.createFile(bucketID, fileID, inputfile.fromPlainText(data, fileName));
        return response;
    } catch (e) {
        console.log(e);
    }
}

const updateFile = async (fileID, fileName, data) => {
    try {
        await deleteFile(fileID);
        let response = await createFile(fileID, fileName, data);
        return response;
    } catch (e) {
        console.log(e);
    }
};

module.exports = {

    getFiles: async function (response) {
        files = await getFiles();
        response.end(JSON.stringify(files));
    },


    getFile: async function (fileId, response) {
        file_data = await getFile(fileId);
        response.end(file_data);
    },

    deleteFile: async function (fileId, response) {
        data = await deleteFile(fileId);
        response.end(JSON.stringify(data));
    },

    createFile: async function (filename, filedata, response) {
        fileID = ID.unique();
        data = await createFile(fileID, filename, filedata);
        response.end(JSON.stringify(data));
    },

    updateFile: async function (fileId, fileName, filedata, response) {
        data = await updateFile(fileId, fileName, filedata);
        response.end(JSON.stringify(data));
    }


};    