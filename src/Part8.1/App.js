"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = exports.showMessage = void 0;
const TITLE = '速習TypeScript';
function showMessage() {
    console.log(`ようこそ、${TITLE}！`);
}
exports.showMessage = showMessage;
class Util {
    static getVersion() {
        return '1.0.0';
    }
}
exports.Util = Util;
