// Nicolaas Johan Jansen van Rensburg - u22590732

import express from "express";
const app = express();
const port = 3000;

app.use(express.static("frontend/public"));
app.use(express.json());


// const password = "Nahoj@rdkanqmd1";
// const username = "u22590732@tuks.co.za";
// const parsedUser = encodeURIComponent(username);
// const parsedPass = encodeURIComponent(password);
const url = `mongodb+srv://u22590732:Gerehe4wkh3@projectcluster.jxvvd.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster`
const {MongoClient} = require('mongodb');

// Get User by Id
app.get('/getUserById', async (req, res) => {
    const userId = parseInt(req.query.id); // Parse `id` from query parameter
    try {
        const user = await getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});

// Get User by Username and Password
app.get('/getUserByLogins', async (req, res) => {
    const {username, password} = req.query; // Extract username and password from query parameters

    if (!username || !password) {
        return res.status(400).json({error: "Username and password are required"});
    }

    try {
        // Call the getUser function with the provided username and password
        // console.log("Inside try 1");
        const user = await getUserByLogins(username, password);
        // console.log("Inside try 2");

        if (user) {
            res.json(user); // Return the user object if found
        } else {
            res.status(404).json({message: "User not found"}); // Respond with a 404 if not found
        }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"}); // Respond with a 500 in case of an error
    }
});

// Get All Users
app.get('/getUsers', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users); // Return the array of users as JSON
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});






async function getUserByLogins(username, password) {
    const client = new MongoClient(url);
    try {
        console.log("Start of function");
        await client.connect();

        // Check connection
        await client.db("SonicGlow").command({ping: 1});

        const database = client.db('SonicGlow');
        const collection = database.collection('users');

        const allUsers = await collection.find({}).toArray();
        // console.log("All users retrieved:", allUsers);

        // Filter the array to find the user with matching username and password
        const user = allUsers[0].users.filter(user =>
            user.username === username && user.password === password
        );


        // console.log(user);

        if (user) {
            // console.log("User found:", user);
            return user; // Return the found user object
        } else {
            console.log("User not found");
            return null; // Return null if no user is found
        }
    } catch (error) {
        console.error("Error retrieving user:", error);
        throw error; // Rethrow the error for further handling
    } finally {
        await client.close(); // Ensure the client is closed
    }
}

async function getUserById(id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        await client.db("SonicGlow").command({ping: 1});
        const database = client.db('SonicGlow');
        const collection = database.collection('users');

        const cursor = collection.find({
            "_id": id
        });

        const userDocuments = await cursor.toArray();

        // Extract the user from the array of userDocuments
        for (let doc of userDocuments) {
            const user = doc.users.find(u => u._id === id);
            if (user) return user;
        }

        return null;
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        throw error;
    } finally {
        await client.close();
    }
}

async function getUsers() {
    try {
        const client = new MongoClient(url);
        await client.connect();

        await client.db("SonicGlow").command({ping: 1});
        const database = client.db('SonicGlow');
        const collection = database.collection('users');

        const cursor = collection.find({});

        const userDocuments = await cursor.toArray();

        // Extract and combine all users from each document
        const allUsers = userDocuments.flatMap(doc => doc.users);

        return allUsers;
    } catch (error) {
        console.error("Error retrieving all users:", error);
        throw error;
    } finally {
        await client.close();
    }
}

app.listen(port, () => {
    console.log("Listening on port 3000");
});

// import path from "path";

// const {MongoClient} = require('mongodb');
// const url = "mongodb://db:27017";


// app.post('/getUsers', async function (req, res) {
//     // console.log('get users called');
//     const results = await getAllUsers(req);
//     res.json(results);
// });

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../../frontend', 'public', 'index.html'));
// });

// async function getAllUsers() {
//     const client = new MongoClient(url);

//     try {
//         await client.connect();
//         const db = client.db("assignment6");
//         const users = db.collection("posts");

//         const results = await users.find().toArray();

//         // console.log(results);
//         return results;
//     }
//     catch (e) {
//         console.error(e);
//     }
//     finally {
//         await client.close();
//     }
// }

// app.delete('/deleteUser', async function (req, res) {
//     const results = await deleteUser(req.body);
//     res.json(results);
// });

// async function deleteUser(body) {
//     const client = new MongoClient(url);

//     try {
//         await client.connect(); // Establish connection to the MongoDB cluster
//         const db = client.db("assignment6");
//         const users = db.collection("posts");

//         // Perform the deletion using the ID
//         const result = await users.deleteOne({id: body.id});
//         return result;
//     }
//     catch (e) {
//         console.error(e); // Handle any errors that occur during the deletion
//         // return false;
//     }
//     finally {
//         await client.close(); // Ensure the connection is closed
//     }
// }

// app.patch('/updateUser', async function (req, res) {
//     const results = await updateUser(req.body);
//     res.json(results);
// });

// async function updateUser(reqBody) {
//     const client = new MongoClient(url);

//     try {
//         await client.connect();
//         const database = client.db('assignment6');
//         const collection = database.collection('posts');

//         console.log(reqBody.id);

//         const result = await collection.updateOne({'id': reqBody.id}, {"$set": {"name": reqBody.name, "content": reqBody.content}});

//         return result;
//     } catch (error) {
//         console.error("Error updating user:", error);
//         // return { success: false, message: "Error updating user." };
//     } finally {
//         await client.close();
//     }
// }