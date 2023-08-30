import express from 'express'
const route = express()
import {buscarTodosJogosPule, buscarResultado, apurar} from '../controladores/controladores'


route.get('/buscarPule', buscarTodosJogosPule)
route.get('/buscarResultado', buscarResultado)
route.get('/apurar', apurar)



export default route