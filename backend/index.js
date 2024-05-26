import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


import EmployeeRouter from './routes/employee.route.js';
import AdminRouter from './routes/admin.route.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://tansarijkm25:tansarijkm25@cluster0.ezvxfrz.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.error('Database connection error', err);
});


app.use('/employee', EmployeeRouter);
app.use('/admin', AdminRouter);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





