// Nicolaas Johan Jansen van Rensburg

// const express = require("express");	

const {MongoClient} = require('mongodb');
const url = "mongodb+srv://u22590732:<db_password>@imy220-cluster.cqxrm.mongodb.net/?retryWrites=true&w=majority&appName=IMY220-Cluster"
const client = new MongoClient(url);
const app = express();

export async function getUserById(id) {
    try {
        await client.connect();
        const db = client.db("sonicGlow");
        const users = db.collection("user");
        
        const dataArr = await users.find().toArray();

        const cursor = dataArr.find({id: id}, {projection: {username: 1, email: 1, playlists: 1, followers: 1, following: 1}});

        const results = await cursor.toArray();
        console.log(results);
        return results;
    } 
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

// async function main() {
//     try {
//         await client.connect();

//         const db = client.db("prac5");
//         const collection = db.collection("prac5");

//         const lowerBound = new Date("2024-10-08");
//         const upperBound = new Date("2024-10-26");

//         const dataArr = await collection.find().toArray();

//         console.log(dataArr);

//         const cursor = collection.find({
//             "locations.area" : "Brookyln",
//             "locations.capacity":{$gt: 20},
//             "locations.date": {
//                 $gte: lowerBound,
//                 $lt: upperBound
//             }}, 
//             {projection: {name: 1, description: 1}});

//         const results = await cursor.toArray();
//         console.log(results);

//     }
//     catch (e) {
//         console.error(e);
//     }
//     finally {
//         await client.close();
//     }
// }

// main().catch(client.error)

// app.use(express.static("public"));

// app.listen(3000, () => {
//     console.log("Listening on port 3000");
// });