import sourceMapSupport from 'source-map-support';
import express from 'express';
import cors from 'cors';
import routes from "./routes";

sourceMapSupport.install();


const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello Stranger!');
});

app.use("/unzip", routes);


app.listen(8000, () => {
    console.log('App listening on port 8000!');
});