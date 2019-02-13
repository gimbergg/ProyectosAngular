"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControllers {
    index(req, res) {
        res.json({ text: ' API CORRECTA' });
    }
}
exports.indexControllers = new IndexControllers();
