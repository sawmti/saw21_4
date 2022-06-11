//const app = require("./app");
//const { json } = require("express/lib/response");
const { MongoClient } = require("mongodb");
async function main() {
    // Connection URI
    const uri = "mongodb+srv://saw214:tarea1saw@cluster0.jwin3.mongodb.net/?retryWrites=true&w=majority";
    // Create a new MongoClient
    const client = new MongoClient(uri);
    try {
        // Connect the client to the server
        await client.connect();
            
        //Establish and verify connection
        await client.db("saw214").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
main().catch(console.error);
