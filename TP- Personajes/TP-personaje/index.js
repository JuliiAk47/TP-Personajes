import express from "express";
import Pelicula from "./models/pelicula.js";
import Personaje from "./models/personaje.js";
const app = express();
import { PersonajeService } from "./services/PersonajeService.js";

const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

app.get('/Personaje', async (req, res) => {
    const pizza = await PersonajeService.getAll(req.params.id)
    res.status(200).send(personaje)
})

app.getALLPelicula('/Pelicula', async (req, res) => {
    const pizza = await PersonajeService.getALLPelicula()
    res.status(200).send(Pelicula)

})

app.post('/Personaje', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PersonajeService.insert(req.body)
        res.status(200).json({ message: 'Personaje creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})

app.postPelicula('/Pelicula', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PersonajeService.insert(req.body)
        res.status(200).json({ message: 'Pelicula creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})


app.put('/Personaje/:id', async (req, res) => {
    try {
        await PersonajeService.update(req.params.id, req.body);
        res.status(200).json({ message: 'Personaje Actualizada'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})

app.putPelicula('/Pelicula/:id', async (req, res) => {
    try {
        await PersonajeService.update(req.params.id, req.body);
        res.status(200).json({ message: 'Pelicula Actualizada'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})

app.delete('/Personaje/:id', async (req, res) => {
    try {
        await PizzaService.deleteById(req.params.id);
        res.status(200).json({ message: 'Personaje Eliminada'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el delete' });

    }
})


app.deletePelicula('/Pelicula/:id', async (req, res) => {
    try {
        await PizzaService.deleteById(req.params.id);
        res.status(200).json({ message: 'Pelicula Eliminada'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el delete' });

    }
})

