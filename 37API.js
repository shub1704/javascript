//execute this in console only not in node environment

fetch("https://api.chucknorris.io/jokes/random");
.then((response) => {
    response.jason();
})
.then((data) => {
    var joke = data.value();
    console.log("JOKE:" ,joke);
})
.catch(); 