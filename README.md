<p align="center">
<img src="https://img.shields.io/badge/Version-1.0.0-blue">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/Open Source-♥-red">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/Platform-linux | windows | macos-9cf">&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Node.js-14.7.6-yellowgreen">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/Frameworks-None-blueviolet">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/license-GPL 3.0-lightgrey">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/Contributions-Welcome-brightgreen">&nbsp;&nbsp;&nbsp; 
</p>

<h1 align="center"> nodeMiniAdmin</h1>
<p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/60380578/133299257-cf16d5e7-d05c-4251-ad36-3544e28ad8dc.png" alt="nodeMiniAdmin Result Screen">
  <br><br>
  <img width="800" src="https://user-images.githubusercontent.com/60380578/133301946-dc676179-3a23-4dad-8658-b34190c8370a.png" alt="nodeMiniAdmin Show DB Tables Screen">
  <br><br>
  <img width="800" src="https://user-images.githubusercontent.com/60380578/133299208-81fdc9bb-6868-4091-9f38-e116e1491020.png" alt="nodeMiniAdmin Query Validation Screen">
  <br><br>
  <img width="400" src="https://user-images.githubusercontent.com/60380578/133299151-ab56514e-7e66-464a-83f5-958bbf44b5a8.png" alt="nodeMiniAdmin Add MySQL Connection Screen">
</p>

<a href="https://nodeminiadmin.herokuapp.com/index"><h1 align="center">Live Demo</h1></a>

## About nodeMiniAdmin
Its a minimal and lightweight tool for quick and easy access to MySQL databases. Focused on usability and simplicity. Written in Javascript, its a single-file app and requires Node.js to run. Its very easy to setup and use.

## How to install
1. Download or clone this repo to a directory of your choice.
```
git clone https://github.com/patil-rahuls/nodeMiniAdmin.git
```
2. Install Node.js (if you haven't already) on your machine.
3. Open up terminal in the directory (where the file `nma.js` exists) and execute `node nma.js`.
4. It might ask you to install the `sync-mysql` module. Please install it and repeat step 3.

Navigate to `https://localhost:3000/index` in your browser to use the app.

## Links
<a href="https://rahulspatil.in/projects/nodeminiadmin">Project Page</a>
<br><a href="https://nodeminiadmin.herokuapp.com/index">Live Demo</a>

## Why use nodeMiniAdmin
**_-Ease of use_**
<br>**_-No framework used_**
<br>**_-Easy to setup_**
<br>**_-Portable- everything in a single file_**
<br>**_-Extremely lightweight_**

## Troubleshooting
1. If port 3000 is already in use or blocked, free it up using the following commands.
<br>linux users: <br>`sudo fuser -k 8000/tcp`  
OSX users  : <br>`sudo lsof -t -i tcp:8000 | xargs kill -9`  
2. If you encounter file I/O errors or exceptions, try running the app with elevated privileges <br>`sudo node nma.js`.
