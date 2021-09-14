<img src="https://img.shields.io/badge/Version-1.0.0-blue">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/Node.js-14.7.6-yellowgreen">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/Frameworks-None-blueviolet">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/Open Source-♥-red">&nbsp;&nbsp;&nbsp; 
<img src="https://img.shields.io/badge/PRs-Welcome-brightgreen">&nbsp;&nbsp;&nbsp; 

<h1 align="center"> nodeMiniAdmin</h1>
<p align="center">
  <img width="200" src="http://material-bread.org/logo-shadow.svg" alt="Material Bread logo">
</p>

<a href="rahuspatil.in/nodeminiadmin/demo"><h1 align="center">Live Demo</h1></a>

## About nodeMiniAdmin
Its a single-file, minimal and extremely lightweight tool for quick and easy access to MySQL databases. Focused on usability and simplicity. Written in Javascript, it requires Node.js runtime.
<br>
<br>**_-No framework used_**
<br>**_-Portable- everything in a single file_**
<br>**_-Extremely lightweight_**
<br>**_-Easy to setup and use_**

## How to install
1. Download or clone this repo to a directory of your choice.
```
git clone https://github.com/patil-rahuls/nodeMiniAdmin.git
```
2. Install Node.js (if you haven't already) on your machine.
3. Open up terminal in the directory (where the file `nma.js` exists) and execute `node nma.js`.
4. It might ask you to install the `sync-mysql` module. Please install it and repeat step 3.
5. Open `https://localhost:3000/index` in your browser.
<br>Done!

## Links
<a href="rahuspatil.in/nodeminiadmin/demo">Screenshots</a>
<br><a href="rahuspatil.in/nodeminiadmin/demo">Live Demo</a>
<br><a href="rahuspatil.in/nodeminiadmin/demo">My Website</a>

## Troubleshooting
1. If port 3000 is already in use or blocked, free it up using the following commands.  
linux users: `sudo fuser -k 8000/tcp`  
OSX users  : `sudo lsof -t -i tcp:8000 | xargs kill -9`  
2. If file I/O errors or exceptions occur, try running the app using elevated privileges `sudo node nma.js`.
