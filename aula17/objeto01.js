let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        this.peso += p
    }
}

amigo.engordar(5)

console.log(amigo.peso)