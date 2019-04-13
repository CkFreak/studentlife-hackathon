"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.ScoreRouter = (() => {
    const getRouter = (scoreHandler) => {
        const router = express_1.Router();
        router.get("/score", scoreHandler.getAllScores);
        router.get("/score/:id", scoreHandler.getScoresForUser);
        router.post("/score", scoreHandler.saveScore);
        return router;
    };
    return {
        getRouter,
    };
})();
//# sourceMappingURL=ScoreRouter.js.map