"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config_1 = require("./config/config");
const ScoreRouter_1 = require("./routers/ScoreRouter");
const ScoreHandler_1 = require("./handler/ScoreHandler");
const UserHandler_1 = require("./handler/UserHandler");
const UserRouter_1 = require("./routers/UserRouter");
exports.App = (mysql) => {
    const app = express();
    const scoreHandler = ScoreHandler_1.ScoreHandler(mysql);
    const userHandler = UserHandler_1.UserHandler(mysql);
    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        console.info("New Request: ", req.url);
        next();
    });
    app.get("/", (req, res) => {
        res.status(200).send("Up and running. JIJ");
    });
    app.use(ScoreRouter_1.ScoreRouter.getRouter(scoreHandler));
    app.use(UserRouter_1.UserRouter.getRouter(userHandler));
    const listen = () => {
        return new Promise(((resolve, reject) => {
            app.listen(config_1.PORT, (err) => {
                if (err)
                    return reject(err);
                return resolve();
            });
        }));
    };
    return {
        listen,
    };
};
//# sourceMappingURL=app.js.map