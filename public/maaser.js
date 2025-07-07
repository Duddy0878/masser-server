export let maaser = {
  currentBalance: 1,
  donations: []
};

export function loadMaaser() {
  return new Promise((resolve, reject) => {
    const masserRequest = new XMLHttpRequest();

    masserRequest.onload = () => {
      console.log('Request loaded');

      if (masserRequest.status === 200) {
        let json;

        if (masserRequest.responseType === 'json') {
          json = masserRequest.response;
        } else {
          json = JSON.parse(masserRequest.response);
        }

        // Update the `maaser` object
        Object.assign(maaser, json);

        console.log('Maaser:', maaser);
        resolve(maaser); // Resolve the Promise with the loaded data
      } else {
        console.error('Error loading request:', masserRequest.statusText);
        reject(new Error('Failed to load maaser data')); // Reject the Promise on error
      }
    };

    masserRequest.onerror = () => {
      reject(new Error('Network error occurred while loading maaser data'));
    };

    masserRequest.open('GET', 'data.json', true);
    masserRequest.setRequestHeader('Accept', 'application/json');
    masserRequest.responseType = 'json';
    masserRequest.send();
  });
}


export function saveToStorage(newMasserPost) {
  const MasserPost = new XMLHttpRequest();

  MasserPost.onload = () => {
   if (MasserPost.status === 200) {
       console.log('Password successfully added and saved to the server.');
   } else {
       console.error('Failed to save the password:', MasserPost.statusText);
   }
};

MasserPost.open('POST', 'data.json'); // Replace with your server URL
MasserPost.setRequestHeader('Content-Type', 'application/json');
MasserPost.send(JSON.stringify(newMasserPost)); // Send the updated passwords
 
 }
