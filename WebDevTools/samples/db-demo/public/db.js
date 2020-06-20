"use strict";
(function(){
  const addButton = document.querySelector('.to-add');
  const addStatus = document.querySelector('.add-status');
  const nameField = document.querySelector('.name');
  const ageField = document.querySelector('.age');

  const resetAddForm = () => {
    nameField.value = '';
    ageField.value = '';
    addStatus.innerText = '';
  };

  const errors = {
    'network-error': 'Error talking to network',
    'need-name': 'Name is required',
    'name-exists': 'User already exists',
    default: 'Unknown error'
  };
  const addUser = ({ name, age }) => {
    fetch('/user', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ name, age })
    })
    .catch( err => {
      return Promise.reject({ error: 'network-error', message: 'network issue'});
    })
    .then( response => {
      if( response.ok ) {
        resetAddForm();
        return;
      }
      return response.json().then( err => Promise.reject(err) );
    })
    .catch( err => {
      addStatus.innerText = errors[err.error] || errors.default;
    });

  };

  addButton.addEventListener('click', () => {
    addUser({ name: nameField.value, age: ageField.value });
  });
})();
