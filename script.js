//Global variables
let usersList = document.getElementById("usersList");
let newUsername = document.getElementById("newUsername");
let newPassword = document.getElementById("newPassword");
let saveNewUserBtn = document.getElementById("saveNewUserBtn");
let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");
let loginUserBtn = document.getElementById("loginUserBtn");
let logoutUserBtn = document.getElementById("logoutUserBtn");
let userGreeting = document.getElementById("userGreeting");

//Fetch user data from server and call function printUsers
fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => printUsers(data));

//Function to print users in a list
function printUsers(users) {
    console.log(users);

    users.map(user => {
        let li = document.createElement("li");
        li.id = user.id;
        li.innerText = user.username;
        usersList.append(li);
    })
}