import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
    
    public async list(req: Request, res: Response){
        res.json([{user: '12345',pass:'12345'},{user: 'asdsad',pass:'Inglim'}]);
        //const usuarios = await pool.query('SELECT * FROM Mule_hbm_email');
        //res.json(usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        //const usuario = await pool.query('SELECT * FROM Mule_hbm_email WHERE id = ?',[id]);
        const usuario = {user:'Liming',pass:'12345'};
        //if(usuario.length > 0){
            //return res.json(usuario[0]);x
            return res.json(usuario);
       // }
        res.status(404).json({mensaje: "Sin resultados!!!"});
        console.log(usuario)
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO Mule_hbm_email set ?',[req.body]);
        res.json({mensaje: 'Creacion Exitosa Mule_hbm_email'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE Mule_hbm_email set ? WHERE id = ?',[req.body, id]);
        res.json({mensaje: 'Actualizacion Exitosa del registro id = '+[req.body, id]});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM Mule_hbm_email WHERE id = ?',[id])
        res.json({mensaje: "Se elimino el registro id = "+[id]});
    }
}

export const gamesControllers = new GamesController();
export default gamesControllers;