fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => console.log(data));