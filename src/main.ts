import express from 'express';
import config from './config.json';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    console.log(`[${req.method}]: ${req.path}`);
    res.send(config.response);
});


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
