"use strict";
exports.__esModule = true;
var express_1 = require("express");
var findAllCoffeesController_1 = require("./useCases/findAllCoffees/findAllCoffeesController");
var routes = (0, express_1.Router)();
var findAllCoffeesController = new findAllCoffeesController_1.FindAllCoffeesController();
routes.use('/coffees', findAllCoffeesController.handle);
exports["default"] = routes;
//# sourceMappingURL=routes.js.map