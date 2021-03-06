# FMP project 

PI² School project for AssetSagacity 

<p align="center"> 
<img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif">
</p>

***

##  ⚙️ How to install and use

1. Clone the repository or download the zip file 
1. With Node.js command prompt, navigate where you downloaded the file and go to the PI2 folder using :
```
cd PI2
```

***

##  🏁 Install dependencies

When you are in the PI2 folder, you need to install express/bootstrap/nunjucks/mongoose using:

```
npm install 
```
***
##  🐸 MongoDB

To run the app, you need to have your MongoDB connection established:
```
cd MongoDB
cd Server
cd 3.4
mongod
```
***
## 🔼 Create database and fill it

To do so, take the two files **clients.json** and **types.json** and put them in the MongoDB/Server/3.4/bin folder (where is mongod) then, in this folder, run the command:

```
mongoimport --host localhost:27017 --db asset --collection clients clients.json
```
Wait for the importation, then run : 

```
mongoimport --host localhost:27017 --db asset --collection types types.json
```

Wait for importation then open your MongoDB GUI (robo3T or studio3T ect) and check if there is a new database named **asset** with 2 collections: **clients** and **types**. If they are here, it means that importation was successful.

***

## ✔️ Launch the app

Then you can launch the app using app.js in the Node.js command prompt like so:

```
npm start
```
Or,

```
node app.js
```

And go to [localhost:3000](http://localhost:3000/)

## 💎 Results:

Here are a few screenshots in case you can't launch the application:

<p align="center"> 
<img src="https://github.com/KingProwl/PI2/blob/master/index.png">
<h4 align="center">This is the index where you can see all the clients</h4>
</p>

<p align="center"> 
<img src="https://github.com/KingProwl/PI2/blob/master/client.png">
<h4 align="center">Here is the view when you click on one client</h4>
</p>

<p align="center"> 
<img src="https://github.com/KingProwl/PI2/blob/master/fond.png">
<h4 align="center">This is the view when you click on one of the funds</h4>
</p>

## 🎓 Credits:

* Gautier DEBAIN
* Louis DE MAINTENANT
* Clément PITARD
* Paul GHAFARI

