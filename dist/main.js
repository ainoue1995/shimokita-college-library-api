"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var v1_1 = __importDefault(require("./routes/v1"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(3000, function () {
    console.log('Start on port 3000.');
});
app.use('/v1', v1_1.default);
//一覧取得
app.get('/', function (req, res) {
    res.send('Hello World');
});
//# sourceMappingURL=main.js.map