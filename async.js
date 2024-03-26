// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.onload = function () {
      if (httpRequest.status === 200) {
        // Check status property
        resolve(httpRequest.responseText);
      } else {
        reject(new Error(`HTTP Error: ${httpRequest.status}`));
      }
    };
    httpRequest.onerror = function () {
      reject(new Error("Network Error"));
    };
    httpRequest.send();
  });
}

// I used this dummy data api for testing that the HTTP Get Data functionproperly working or not

makeGetRequest('https://dummy.restapiexample.com/api/v1/employees')
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err));
