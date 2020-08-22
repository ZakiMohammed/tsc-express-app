import express, { Application } from 'express'

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/employees', require('./routes/employees'));

app.listen(PORT, () => {
    console.log(`Server started running on ${PORT}`);
});