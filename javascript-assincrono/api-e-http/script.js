const url = 'https://api.github.com/users/RafaelBorges93'

fetch(url)
.then(response => response.json())
.then(value => {
  console.log(value);
  console.log(value.bio);
});

const url1 = 'https://cors-anywhere.herokuapp.com/https://www.google.com';

fetch(url1)
.then(response => response.text())
.then(text => console.log(text));