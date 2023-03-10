//GLOBAL VARIABLES
let rootHtmlElement = document.getElementById("root");
let showAllUsersBtn = document.getElementById("showAllUsersBtn");
let loginUserForm = document.getElementById("loginUserForm");
let createNewUserForm = document.getElementById("createNewUserForm");
let userGreeting = document.getElementById("userGreeting");
let loggedInUser = localStorage.getItem("username");


//RENDER DIFFERENT CONTENT DEPENDING IF USER IS LOGGED IN OR NOT
if (loggedInUser) {
    userGreeting.innerText = "Hello " + loggedInUser + "!";
    printLogoutBtn();
} else {
    printLoginForm();
    //printUsers();
};

//SHOW ALL USERS BUTTON EVENT
showAllUsersBtn.addEventListener("click", () => {
    printUsers();
});


//FUNCTION TO PRINT USERS IN A LIST 
function printUsers() {
    
    //Fetch user data from server and call function printUsers
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {        
        
        let usersList = document.createElement("ul");
        usersList.innerHTML = "";
        
        data.map(user => {
            let li = document.createElement("li");
            li.id = user.id;
            li.innerText = user.username;
            usersList.append(li);
        })
        rootHtmlElement.innerHTML = "";
        rootHtmlElement.append(usersList);
    })   
};


//FUNCTION TO CREATE NEW USER FORM
function printCreateNewUserForm() {
    let createNewUserHeader = document.createElement("h2");
    createNewUserHeader.innerText = "Create new user"
    let createNewUsername = document.createElement("input");
    createNewUsername.placeholder = "Username";
    let createNewPassword = document.createElement("input");
    createNewPassword.placeholder = "Password";
    let saveNewUserBtn = document.createElement("button");
    saveNewUserBtn.innerText = "Save";

    //Send input values to server when user clicks the save button
    saveNewUserBtn.addEventListener("click", () => {
        createNewUserHeader.innerText = "New user was created!";

        //Create new user object
        let user = {
            username: createNewUsername.value, 
            password: createNewPassword.value
        };

        //POST to server
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())

        //Call function printUsers to add new user to list
        .then(data => {
            printUsers(data);
        });
    });
    createNewUsername.value = "";
    createNewPassword.value = "";
    createNewUserForm.innerHTML = "";
    createNewUserForm.append(createNewUserHeader, createNewUsername, createNewPassword, saveNewUserBtn);
}


//FUNCTION TO CREATE LOGIN FORM
function printLoginForm() {
    let loginHeader = document.createElement("h2");
    loginHeader.innerText = "Login"
    let loginUsername = document.createElement("input");
    loginUsername.placeholder = "Username";
    let loginPassword = document.createElement("input");
    loginPassword.placeholder = "Password";
    let loginBtn = document.createElement("button");
    loginBtn.innerText = "Login";
    let loginGreeting = document.createElement("h3");

    //Send login input values to server when user clicks the login button
    loginBtn.addEventListener("click", () => {

        //Create object with user login input
        let loginUser = {
            name: loginUsername.value,
            password: loginPassword.value
        }

        //POST to server
        fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginUser)
        })
        .then(res => res.json())
        
        .then(data => {
            if(data.name) {
                userGreeting.innerText = "Hello " + data.name + "!";

                //Save info in local storage
                localStorage.setItem("username", data.name);
                localStorage.setItem("id", data.id);

                createNewUserForm.innerHTML = "";
                printLogoutBtn();
            }
            else {
                userGreeting.innerText = "Incorrect password or username.";
                printLoginForm();
                printCreateNewUserForm();
            }
        });
    });
    printCreateNewUserForm();
    loginUserForm.innerHTML = "";
    loginUserForm.append(loginHeader, loginUsername, loginPassword, loginBtn, loginGreeting);
};


//FUNCTION TO CREATE LOGOUT BUTTON
function printLogoutBtn() {
    let logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Logout";
    let logoutGreeting = document.createElement("h3"); 
    
    //Delete local storage and show logout message when user clicks the logout button
    logoutBtn.addEventListener("click", () => {
        userGreeting.innerText = "";
        userGreeting.innerText = "You have been logged out.";

        localStorage.removeItem("username");
        localStorage.removeItem("id");

        printLoginForm();
        printCreateNewUserForm();
    });

    loginUserForm.innerHTML = "";
    loginUserForm.append(logoutGreeting);
    loginUserForm.append(logoutBtn);
}


