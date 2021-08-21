import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from "./schema/dbCards.js";

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:vTlzaSncRG8NTr4j@cluster0.i9i1q.mongodb.net/tinderdb?retryWrites=true&w=majority'


//Middlewares
app.use(express.json())
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoint
app.get('/', (req, res) => res.status(200).send('Hello Clever Programmers..!'))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    });

});

app.get('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    });
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));