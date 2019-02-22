"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json([{ user: '12345', pass: '12345' }, { user: 'asdsad', pass: 'Inglim' }]);
            //const usuarios = await pool.query('SELECT * FROM Mule_hbm_email');
            //res.json(usuarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //const usuario = await pool.query('SELECT * FROM Mule_hbm_email WHERE id = ?',[id]);
            const usuario = { user: 'Liming', pass: '12345' };
            //if(usuario.length > 0){
            //return res.json(usuario[0]);x
            return res.json(usuario);
            // }
            res.status(404).json({ mensaje: "Sin resultados!!!" });
            console.log(usuario);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Mule_hbm_email set ?', [req.body]);
            res.json({ mensaje: 'Creacion Exitosa Mule_hbm_email' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Mule_hbm_email set ? WHERE id = ?', [req.body, id]);
            res.json({ mensaje: 'Actualizacion Exitosa del registro id = ' + [req.body, id] });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Mule_hbm_email WHERE id = ?', [id]);
            res.json({ mensaje: "Se elimino el registro id = " + [id] });
        });
    }
}
exports.gamesControllers = new GamesController();
exports.default = exports.gamesControllers;
