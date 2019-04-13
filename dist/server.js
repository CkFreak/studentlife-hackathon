"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config/config");
const MySQLService_1 = require("./service/MySQLService");
MySQLService_1.MySQLService().init().then((mysql) => {
    return app_1.App(mysql).listen();
}).then(() => {
    console.info(`Server is listening on Port ${config_1.PORT}`);
}).catch((err) => {
    console.error("There was an error when starting the server!", err);
});
//# sourceMappingURL=server.js.map