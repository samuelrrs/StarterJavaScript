const age = prompt('Digite a idade: ')

function verificar(age) {
    return new Promise((resolve, reject) => 
        setTimeout(() => age >= 18 ? resolve() : reject(), 2000)
    )
}

verificar(age)
    .then(() => console.log('Maior de 18 anos'))
    .catch(() => console.log('Menor de 18 anos'))