"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var errorMiddelware_1 = require("./errors/errorMiddelware");
var routes_1 = __importDefault(require("./routes"));
var PORT = process.env.PORT || 3008;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(routes_1["default"]);
app.use(errorMiddelware_1.errorMiddleware);
app.listen(PORT, function () { return console.log("Running on Port: ".concat(PORT)); });
//# sourceMappingURL=server.js.map