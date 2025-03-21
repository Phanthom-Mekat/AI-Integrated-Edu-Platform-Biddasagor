const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
dotenv.config();    
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k2nj4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const database = client.db('Biddashagor');
        const scoreCollection = database.collection('userScore');
        const quizCollection = database.collection('quizQuestions');

                app.post("/save-game", async (req, res) => {
                    const newQuiz = req.body;
                    const result = await scoreCollection.insertOne(newQuiz);
                    res.send(result);
                });

                app.post("/quizResults", async (req, res) => {
                    const newQuizHistory = req.body;
                    const result = await quizCollection.insertOne(newQuizHistory );
                    res.send(result);
                });

                app.get('/userScores', async (req, res) => {
                    const cursor = scoreCollection.find();
                    const result = await cursor.toArray();
                    res.send(result);
                });



       

       


    } finally {
        // Ensures that the client will close when you finish/error
        //   await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Backend connected')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
