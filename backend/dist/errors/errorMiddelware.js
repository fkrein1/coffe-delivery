"use strict";
exports.__esModule = true;
exports.errorMiddleware = void 0;
var AppError_1 = require("./AppError");
var errorMiddleware = function (err, _req, res, _next) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=errorMiddelware.js.map