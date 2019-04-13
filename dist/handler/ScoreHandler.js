"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreHandler = (mysql) => {
    const saveScore = (req, res) => {
        mysql.saveScore(req.body.user, req.body.score).then(() => {
            res.status(200).send({ message: "Success" });
        }).catch((err) => {
            console.error("There was an error when saving a score for a user", err);
            res.status(500).send({ message: "Internal Server Error" });
        });
    };
    const getScoresForUser = (req, res) => {
        mysql.getScoresForUser(req.params.id).then(result => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            console.error("There was an error when getting scores for a user", err);
            res.status(500).send({ message: "Internal Server Error" });
        });
    };
    const getAllScores = (req, res) => {
        mysql.getAllScores().then(result => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            console.error("There was an error getting all scores", err);
            res.status(500).send({ message: "Internal Server Error" });
        });
    };
    return {
        saveScore,
        getScoresForUser,
        getAllScores,
    };
};
//# sourceMappingURL=ScoreHandler.js.map