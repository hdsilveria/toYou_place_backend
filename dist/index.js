"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get('/teste', function (req, res) {
    return res.send('hello wordl');
});
app.listen(8080, function () {
    console.log("Aplicação rodando na porta 8080");
});
