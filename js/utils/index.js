"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpCodes = void 0;
var httpCodes;
(function (httpCodes) {
    httpCodes[httpCodes["OK"] = 200] = "OK";
    httpCodes[httpCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    httpCodes[httpCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    httpCodes[httpCodes["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
    httpCodes[httpCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    httpCodes[httpCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    httpCodes[httpCodes["REQUEST_CONFLICT"] = 409] = "REQUEST_CONFLICT";
    httpCodes[httpCodes["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(httpCodes || (exports.httpCodes = httpCodes = {}));
