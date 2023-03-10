# Login page with Node.js and Express (client-side) 🚀

 A school exercise where i created a simple login page using Node.js and Express 💻

This is the first project where I am using Node and Express. I had the opportunity to practice working with APIs, using Fetch for data retrieval, and implementing local storage. As this is an exercise, certain aspects have been simplified, such as user data and passwords being created and handled in a basic way without addressing security considerations.

### ➡️ Instructions for the exercise: 
- You will develop an API (using Express.js) that can be called from the front-end application (using Fetch) to send the username and password to a route on the server.
- Create multiple users in a global object array on the server so that you can log in with different users. Each user should have a unique ID.
- On the server side, you need to check if the entered username and password are correct.
- If the login is incorrect, an error message should be sent back and displayed on the client.
- BONUS: Upon successful login, save the visitor's ID in localStorage.
When the page is refreshed, display a welcome message instead of the login form to the visitor, along with a logout button that deletes the ID from localStorage.
