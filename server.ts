import { Request, Response } from "express";
import express from 'express';
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();
const port = process.env.PORT || 5151;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});