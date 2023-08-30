import { buscarJogosPuleQuery, buscarResultadoQuery } from "../data/querys";
import { Request, Response } from "express";
import { milhar, centena, dezena} from "./tipoJogoSistema";

export const buscarTodosJogosPule = async (req: Request, res:Response) => {
    
    const a = await buscarJogosPuleQuery('1')
    return res.json(a.rows)
}


export const buscarResultado = async (req: Request, res:Response) => {

    const a = await buscarResultadoQuery('1')
    return res.json(a.rows)
}

export const apurar = async (req: Request, res:Response) => {
    
    const a = await buscarJogosPuleQuery('1')
    const b = await buscarResultadoQuery('1')
    milhar(a.rows, b.rows)
    centena(a.rows, b.rows)
    dezena(a.rows, b.rows)
}