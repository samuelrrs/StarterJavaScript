const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


const idade = usuarios.map(users => users.idade);



const filter = usuarios.filter(users => users.empresa === 'Rocketseat' && users.idade > 18);



const find = usuarios.find(users => users.empresa === 'Google');



const calculo = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
console.log(calculo);
