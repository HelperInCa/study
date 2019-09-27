(function() {

  const refresh = () => {
    fetch('/people/')
    .then( response => {
      if( response.ok ) {
        return response.json();
      }
      throw new Error("poop");
    })
    .then( people => {
      const names = people.map( name => `<li>${name}</li>`).join('');
      document.querySelector('.people').innerHTML = names;
    });
  };

  const resetAddForm = () => {
    const name = document.querySelector('.name').value = '';
    const age = document.querySelector('.age').value = '';
  };

  document.querySelector('.refresh').addEventListener('click', () => {
    refresh();
  });

  document.querySelector('.add').addEventListener('click', () => {
    const name = document.querySelector('.name').value;
    const age = document.querySelector('.age').value;
    if(name && age) {
      resetAddForm();
      fetch('/people/', {
        method: 'POST',
        headers: new Headers({
          'content-type': 'application/json'
        }),
        body: JSON.stringify( { name, age } )
      })
      .then( response => {
        if( response.ok ) {
          refresh();
        } else {
          throw new Error(" post poop" );
        }
      });
    }
  });

  refresh();
})();
