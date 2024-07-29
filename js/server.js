"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const dotenv = require('dotenv');
// dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5151;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
console.log("qeqweqwe");
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// // "exec": "concurrently \"npx tsc --watch\" \"ts-node --files ./server.ts\""
