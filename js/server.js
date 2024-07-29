"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_url_shortener_1 = __importDefault(require("node-url-shortener"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5151;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/shorten-url', (req, res) => {
    const { url } = req.body;
    console.log(url);
    if (!url)
        return res.send({ error: 'Url is required' });
    const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (!regex.test(url))
        return res.send({ error: 'Invalid url' });
    node_url_shortener_1.default.short(url, (err, result) => {
        if (err)
            return res.send({ error: err });
        return res.send({ shortUrl: result });
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
