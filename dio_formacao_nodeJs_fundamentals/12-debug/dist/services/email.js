"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseEmail = getBaseEmail;
function getBaseEmail(senderName) {
    return __awaiter(this, void 0, void 0, function* () {
        let base = yield getHeaderText();
        base += `Olá ${senderName}, gostaria de me inscrever para uma vaga.`;
        base += `\nEstou deixando o meu currículo.`;
        return base;
    });
}
function getHeaderText() {
    return __awaiter(this, void 0, void 0, function* () {
        return "EMAIL PARA VOCÊ\n\n";
    });
}
//# sourceMappingURL=email.js.map