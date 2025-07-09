"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const porta = 3030;
app.get('/', (req, res) => {
    res.send('Executando a NODE JS API REST');
});
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
//# sourceMappingURL=index.js.map