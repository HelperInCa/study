export const makeGuess = ({ id, guess }) => {
  return fetch(`/game/${id}/${guess}`)
  .catch( err => Promise.reject('you should have error handling') )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject('you should have MORE error handling');
  })
};

export const loadWords = () => {
  return fetch('/words')
  .catch( err => Promise.reject('you should have error handling') )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject('you should have MORE error handling');
  })
};

export const getGameId = () => {
  return fetch('/game', {
    method: 'POST',
  })
  .catch( err => Promise.reject('you should have error handling') )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject('you should have MORE error handling');
  });
};
