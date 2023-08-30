
interface Aposta {
    jogo: string;
    linha: string;
    numero: string;
}

interface Resultado {
    [key: string]: string;
}

export const milhar = (pule: Aposta[], resultado: Resultado[]) => {
    for(let aposta of pule){
        if(aposta.jogo === 'm'){
            const chave = `linha_${aposta.linha}`
            const resultadoMapeadoLinha = resultado[0][chave]
            if(aposta.numero === resultadoMapeadoLinha){
                console.log('premiou milhar')
            }

        }
    }
}

export const centena = (pule: Aposta[], resultado: Resultado[]) => {
    for(let aposta of pule){
        if(aposta.jogo === 'c'){
            const chave = `linha_${aposta.linha}`
            const resultadoMapeadoLinha = resultado[0][chave].substring(1)
            if(aposta.numero === resultadoMapeadoLinha){
                console.log('premiou centena')
            }

        }
    }
}

export const dezena = (pule: Aposta[], resultado: Resultado[]) => {
    for(let aposta of pule){
        if(aposta.jogo === 'd'){
            const chave = `linha_${aposta.linha}`
            const resultadoMapeadoLinha = resultado[0][chave].substring(2)
            if(aposta.numero === resultadoMapeadoLinha){
                console.log('premiou dezena')
            }

        }
    }
}


