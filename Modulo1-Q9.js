const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}`)
    }
}

joao.nome = 'Maria'
joao.saudacao()