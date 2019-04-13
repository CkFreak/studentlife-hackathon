"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = (mysql) => {
    const createUser = (req, res) => {
        mysql.createUser(req.body.name).then(() => {
            res.status(200).send({ message: "Success" });
        }).catch((err) => {
            console.error("There was an error when saving a new user", err);
            res.status(500).send({ message: "Internal Server Error" });
        });
    };
    return {
        createUser,
    };
};
//# sourceMappingURL=UserHandler.js.map