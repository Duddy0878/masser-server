export let acounts = []
  




export function loadAcounts() {
  return new Promise((resolve, reject) => {
    const acountsRequest = new XMLHttpRequest();

    acountsRequest.onload = () => {
      console.log('Request loaded');

      if (acountsRequest.status === 200) {
        let json;

        if (acountsRequest.responseType === 'json') {
          json = acountsRequest.response;
        } else {
          json = JSON.parse(acountsRequest.response);
        }
  

        // Update the `maaser` object
        Object.assign(acounts, json);
        
        
        resolve(acounts); // Resolve the Promise with the loaded data
      } else {
        console.error('Error loading request:', acountsRequest.statusText);
        reject(new Error('Failed to load acounts data')); // Reject the Promise on error
      }
    };

    acountsRequest.onerror = () => {
      reject(new Error('Network error occurred while loading accounts data'));
    };

    acountsRequest.open('GET', 'acounts.json', true);
    acountsRequest.setRequestHeader('Accept', 'application/json');
    acountsRequest.responseType = 'json';
    acountsRequest.send();
  });
}


export function saveToAcountsStorage(newAcountsPost) {
  const acountsPost = new XMLHttpRequest();

  acountsPost.onload = () => {
   if (acountsPost.status === 200) {
       console.log('acounts successfully added and saved to the server.');
   } else {
       console.error('Failed to save the acounts:', acountsPost.statusText);
   }
};

    
       
        

acountsPost.open('POST', 'acounts.json'); // Replace with your server URL
acountsPost.setRequestHeader('Content-Type', 'application/json');
acountsPost.send(JSON.stringify(newAcountsPost)); // Send the updated passwords
 
 }