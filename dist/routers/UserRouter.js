"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.UserRouter = (() => {
    const getRouter = (userHandler) => {
        const router = express_1.Router();
        router.post("/user", userHandler.createUser);
        return router;
    };
    return {
        getRouter,
    };
})();
//# sourceMappingURL=UserRouter.js.map