export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    }
    else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

/* to implement the code use:
getFullResponseFromAPI(true)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error.message);
  });
*/
