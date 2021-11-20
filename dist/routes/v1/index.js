"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var books_1 = __importDefault(require("./books"));
var router = express_1.default.Router();
// v1以下のルーティング
router.use('/books', books_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map