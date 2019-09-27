export const checkLock = (sequence) => {
  return fetch(`/lock?seq=${sequence}`, {
    headers: new Headers({
      'content-type': 'application/json'
    }),
  })
  .catch( err => Promise.reject({ code: 'network', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ code: 'poop', err: response.statusText });
  })
};

export const changeLock = (sequence) => {
  return fetch(`/lock?seq=${sequence}`, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json'
    }),
  })
  .catch( err => Promise.reject({ code: 'network', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ code: 'poop', err: response.statusText });
  })
};
// Alter the combo-lock to:
// 1. Have a "Change" button that is disabled unless the lock is unlocked
// 2. When pressed, the "Change" button changes to "Set"
// 3. Until "Set" is pressed it gathers a new sequence
// 4. When "Set" is pressed it sends the new sequence to the backend(service call)
// 5. The backend will update the secret to the new sequence
// 6. The front end will change to "Locked" with no sequence shown.

