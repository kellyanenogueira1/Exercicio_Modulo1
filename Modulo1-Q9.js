const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}`)
    }
}

function saudacaoMaria(){
    nome = 'Maria'

    const {saudacao} = joao
    return saudacao()
}

saudacaoMaria()