fetch('https://api.chucknorris.io/jokes/random')
.then((response)=>{
    console.log("Api:",response.json());
})
.catch()