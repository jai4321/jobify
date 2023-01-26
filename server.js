import dotenv from 'dotenv';
import express from "express";
import "express-async-errors";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js"
import jobsRouter from "./routes/jobsRoutes.js"

dotenv.config();

const app = express();

const port =  process.env.PORT || 5000;

app.use(express.json())

app.get('/', (req, res)=>{
    // throw new Error('error');
    res.send('Welcome!');
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

//Middleware
app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, ()=>{
            console.log('server is listening to port '+port);
        })
    } catch (error) {
        console.log(error)
    }
}

start();