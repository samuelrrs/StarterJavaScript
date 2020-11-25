function add() {
    const list = document.getElementById('list');
    const user = document.getElementById('user');
    const url = `https://api.github.com/users/${user.value}/repos`;
  
    axios
      .get(url)
      .then(function(response) {
        const repos = response.data;
  
        for (const repo of repos) {
          const item = document.createElement('li');
          const textItem = document.createTextNode(repo.name);
          item.appendChild(textItem);
          list.appendChild(item);
        }
      })
      .catch(function(error) {
        alert('Usuário n existe')
      });
  }

  