export let maaser = {
  currentBalance: 1,
  donations: []
};

let allAcounts = [];

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
        var tryout;

        if (localStorage.getItem('ditnoua') !== null){
       
        for(let i = 0; i < json.length; i++) {
          
        if(JSON.parse(localStorage.getItem('ditnoua')) === json[i].acountId){
           tryout = json[i];
           break
        }
        }
       }
       else{
                tryout = {
                "acountId": 1000,
                "autoPay": false,
                "isSwapped": false,
                "myCharity": "matbia",
                "customCharity": {},
                "incomes":{
                "myPay": 0,
                "typesOfPay": [
                  
                  ]
                  },
                "currentBalance": 1,
                "donations": []
              }
       }
        // Update the `maaser` object
        Object.assign(allAcounts, json);
        Object.assign(maaser, tryout);

        console.log('Maaser:', maaser);
        console.log('allAcounts:', allAcounts);
        
        
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

        for(let i = 0; i < allAcounts.length; i++) {
      if(JSON.parse(localStorage.getItem('ditnoua')) === allAcounts[i].acountId){
          allAcounts[i] = newMasserPost;
          }
        }
       
        

MasserPost.open('POST', 'data.json'); // Replace with your server URL
MasserPost.setRequestHeader('Content-Type', 'application/json');
MasserPost.send(JSON.stringify(allAcounts)); // Send the updated passwords
 
 }
