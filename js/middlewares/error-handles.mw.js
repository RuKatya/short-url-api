"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandler = exports.NotFoundHandler = void 0;
const utils_1 = require("../utils");
// 404 handler
const NotFoundHandler = (req, res, next) => {
    const error = new Error("route not founded");
    error['status'] = utils_1.httpCodes.NOT_FOUND;
    next(error);
};
exports.NotFoundHandler = NotFoundHandler;
//Global Error
const GlobalErrorHandler = (error, req, res, next) => {
    console.log(error.message || "שגיא בסרבר, נא לנסות שנית");
    res.status(error.status || 500).json({ continueWork: false, message: error.message || "שגיא בסרבר, נא לנסות שנית" });
};
exports.GlobalErrorHandler = GlobalErrorHandler;
