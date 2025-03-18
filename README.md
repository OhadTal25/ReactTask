# React Code Collaboration Platform    
     
## Project Overview         
This project is a React-based web application designed for real-time code collaboration. It allows users to join different code blocks, edit code in real-time, and see updates live as they happen, similar to Google Docs but for code. The project utilizes technologies like React, Socket.IO, Firebase, and Express.js.
   
## Live Demo      
Explore the live demo of the project [here](https://ohad-moveo-project.netlify.app).         
   
## Features     
- **Real-time Code Editing**: Users can edit code in real-time across different devices.
- **Code Block Management**: A variety of code blocks, such as Async Case, Callback Example, Promise Handling, and Event Loop Explanation, are available for collaboration.
- **Syntax Highlighting**: The application includes syntax highlighting for better readability.
- **Firebase Integration**: Real-time data syncing and storage through Firebase. 
- **Socket.IO Communication**: Real-time bi-directional event-based communication.

## Getting Started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Open a terminal window and navigate to the root directory of your project.
- Run: cd server
- Run: npm install (to install all of the project's dependencies).
- Run: npm start (to start the development server).

#### now open another terminal window and navigate to the root directory of your project. 
- Run: cd client
- Run: npm install (to install all of the project's dependencies).
- Run: npm start (to start the development server). This will automatically open a new browser window with the project running in it.

*CodeBlocks Data*:
The data for the available code blocks has been organized into a separate file for better maintainability. 
You can find the code blocks data in the codeBlocksData.js file.
