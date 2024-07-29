"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_url_shortener_1 = __importDefault(require("node-url-shortener"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const error_handles_mw_1 = require("./middlewares/error-handles.mw");
const app = (0, express_1.default)();
const port = process.env.PORT || 5151;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// status check points
app.get('/', (req, res) => res.sendStatus(200));
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
// 404 handler
app.use(error_handles_mw_1.NotFoundHandler);
// Global Error Handler
app.use(error_handles_mw_1.GlobalErrorHandler);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
