import config from '../db-config.js';
import sql from 'mssql';
import Personaje from '../models/personaje.js';

export class PersonajeService {
    static getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.GetAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Personaje');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getAllPelicula = async () => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.GetAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Pelicula');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Personaje WHERE Id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insert = async (Personaje) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.insert(personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImg', Personaje.imagen)
                .input('pNom', Personaje.nombre)
                .input('pEdad', Personaje.edad)
                .input('pPeso', Personaje.peso)
                .input('pHistoria', Personaje.historia)
                .input('pPelicula', Personaje.PeliculaAsociada)
                .query('INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia, PeliculaAsociada) VALUES (@pImg, @pNom, @pEdad, @pPeso, @pHistoria,@pPelicula)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertPelicula = async (Pelicula) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.insert(personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImg', Pelicula.imagen)
                .input('pTitulo', Pelicula.titulo)
                .input('pPeso', Pelicula.peso)
                .input('pHistoria', Pelicula.FechaCreacion)
                .input('pPelicula', Pelicula.PersonajesAsociados)
                .input('pCalificacion', Pelicula.Calificacion)
                .query('INSERT INTO Personaje (Imagen, Titulo, Peso, FechaCreacion, PersonajesAsociados, Calificaion) VALUES (@pImg, @pTitulo, @pPeso, @FechaCreacion ,@PersonajesAsociados, @pCalificacion)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }




    static update = async (id, Personaje) => {
        let returnEntity = null;
        console.log(Personaje);
        console.log('Estoy en: PersonajeService.update(personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImg', Personaje.imagen)
                .input('pNom', Personaje.nombre)
                .input('pEdad', Personaje.edad)
                .input('pPeso', Personaje.peso)
                .input('pHistoria', Personaje.historia)
                .input('pPelicula', Personaje.PeliculaAsociada)
                .query("UPDATE Personaje SET Nombre=@pNom, Imagen=@pImg, Edad=@pEdad, Peso=@pPeso, Historia=@pHistoria, PeliculaAsociada=@pPeliculaAsociada WHERE id = @pId");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static updatePelicula = async (id, Pelicula) => {
        let returnEntity = null;
        console.log(Pelicula);
        console.log('Estoy en: PersonajeService.update(personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', Pelicula.id)
            .input('pImg', Pelicula.imagen)
            .input('pTitulo', Pelicula.titulo)
            .input('pPeso', Pelicula.peso)
            .input('pHistoria', Pelicula.FechaCreacion)
            .input('pPelicula', Pelicula.PersonajesAsociados)
            .input('pCalificacion', Pelicula.Calificacion)
                .query("UPDATE Personaje (Imagen, Titulo, Peso, FechaCreacion, PersonajesAsociados, Calificaion) VALUES (@pImg, @pTitulo, @pPeso, @FechaCreacion ,@PersonajesAsociados, @pCalificacion) WHERE id = @pId");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }




    static deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeService.deleteBy(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Personaje WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

    static deletePelicula = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeService.deleteBy(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Pelicula WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }



    static DetallePersonaje = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.DetallePersonaje(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT P.Id, P.Nombre, P.Imagen, P.Edad, P.Peso, P.Historia, Pelicula.Nombre FROM Personaje P WHERE Id = @pId inner join Pelicula on P.PeliculaAsociada=Pelicula.Id ');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static ListadoPeliculas = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.DetallePersonaje(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT P.Id,P.Imagen,P.Titulo,P.FechaCreacion from Pelicula');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    static DetallePeliculaConPersonajes = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeService.DetallePersonaje(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT P.*,Personaje.Nombre FROM Pelicula P WHERE Id = @pId inner join Personaje on P.PersonajesAsociados=Personaje.Id ');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}
