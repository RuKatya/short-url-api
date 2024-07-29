import { Request, Response } from "express";
import express from 'express';
import shortUrl from "node-url-shortener"
import cors from "cors"
const app = express();
const port = process.env.PORT || 5151;

app.use(cors())
app.use(express.json());

app.post('/shorten-url', (req: Request, res: Response) => {
    const { url } = req.body;
    console.log(url)

    if (!url) return res.send({ error: 'Url is required' })

    const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

    if (!regex.test(url)) return res.send({ error: 'Invalid url' })

    shortUrl.short(url, (err: any, result: any) => {
        if (err) return res.send({ error: err })

        return res.send({ shortUrl: result })
    })
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});