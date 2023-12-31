﻿# backend_documentation
# Backend_Document
Step 1: Set up your Node.js environment
First things first, make sure you have Node.js installed on your machine. You can download the latest version from the official Node.js website (https://nodejs.org). Once installed, open your terminal or command prompt and verify the installation by typing:

node -v
If you see a version number, you’re good to go!

Step 2: Initialize your project
Create a new project directory and navigate into it using the terminal. Then, run the following command to initialize a new Node.js project:

npm init -y
This command will create a new package.json file with default settings.

Step 3: Install the Express module
Now, let’s install the Express module, which will make server creation a breeze. In the terminal, run the following command:

npm install express
This command will download and install the Express module into your project.

Step 4: Create your server file
Create a new file, let’s call it server.mjs in your project directory. Open it in a text editor, and let's start coding!

In server.mjs, add the following lines of code:

import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
