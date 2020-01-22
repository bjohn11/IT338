fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});

fetch('http://127.0.0.1:8887/products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
document.getElementById("resultArea").innerHTML = products;
}).catch(function(err) {
document.getElementById("resultArea").innerHTML = "Fetch problem: " + err.message;
});

fetch("http://127.0.0.1:8887/products.json",{ mode: 'no-cors' })
.then(function(response) {return response.json()})
.then(function(json) {document.getElementById("resultArea").innerText =  JSON.stringify(json)})
.catch(function(err) {document.getElementById("resultArea").innerHTML = "Fetch problem: " + err.message})

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))

fetch("http://127.0.0.1:8887/products.json"),{ mode: 'no-cors' })
.then(function(response) {return response.text()})
.then(function(json) {document.getElementById("resultArea").innerText =  JSON.stringify(json)})
.catch(function(err) {document.getElementById("resultArea").innerHTML = "Fetch problem: " + err.message})

//after setting up the server properly, the following will work

fetch('http://140.192.232.69:8887/products.json')
  .then(response => response.json())
  .then(data => document.getElementById("resultArea").innerHTML = (JSON.stringify(data)))