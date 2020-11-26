# StarterJavaScript&Es6
<p>
<p>


<h2> Exercícios: Módulo 01 JS</h2>
<p>
<h4> 1º exercício </h4>
<p>
Crie uma função que dado o objeto a seguir:
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};
<p>
Retorne o seguinte conteúdo:
<p>
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
<p>
<p>
<h4> 2º exercício </h4>
<p>
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
<p>
function pares(x, y) {
 // código aqui
}
<p>
pares(32, 321);
<p>
<h4> 3º exercício </h4>
<p>
<p>
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
<p>
<h4> 4º exercício </h4>
<p>
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
<p>
<p>
<h4> 5º exercício </h4>
<p>
<p>
Dado o seguinte vetor de objetos:
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

<p>
<p>
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.


<p>


<h2>Exercícios: Módulo 02</h2>
<p>
<h4> 1º exercício </h4>
<p>
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.
<p>
<h4> 2º exercício </h4>
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
<p>
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
<p>
var newColor = getRandomColor(); // #E943F0
<h4> 3º exercício </h4>
<p>
A partir do seguinte vetor:
var nomes = ["Diego", "Gabriel", "Lucas"];
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas
<p>
<p>
<h4> 4º exercício </h4>
<p>
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
<p>
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
<p>