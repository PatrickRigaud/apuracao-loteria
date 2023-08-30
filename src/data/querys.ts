import {db} from '../infra/database'


export const buscarJogosPuleQuery = (id: string) => {
    return db.query('select * from dados_jogos where pule_extracao = $1', [id])
}

export const buscarResultadoQuery = (id: string) => {
    return db.query('select * from resultado where id = $1', [id])
}