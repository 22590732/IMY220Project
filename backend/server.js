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
    const userId = parseInt(req.query.id);
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
    const {username, password} = req.query;

    if (!username || !password) {
        return res.status(400).json({error: "Username and password are required"});
    }

    try {
        // console.log("Inside try 1");
        const user = await getUserByLogins(username, password);
        // console.log("Inside try 2");

        if (user) {
            res.json(user); // Return the user object if found
        } else {
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});

// Get All Users
app.get('/getUsers', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
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

        const user = allUsers[0].users.filter(user =>
            user.username === username && user.password === password
        );


        // console.log(user);

        if (user) {
            // console.log("User found:", user);
            return user;
        } else {
            console.log("User not found");
            return null;
        }
    } catch (error) {
        console.error("Error retrieving user:", error);
        throw error;
    } finally {
        await client.close();
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