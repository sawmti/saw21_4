const connection = require('./conectdb.js');

async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("saw214").collection("deportes").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}