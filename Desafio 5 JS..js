var usuarios = [
    {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    { nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
  ];
  
  const mostrarMsg = (usuarios) => {
    
    for( var usuario of usuarios) {
        const {nome, habilidades} = usuario
        console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
    }

  };

  mostrarMsg(usuarios)