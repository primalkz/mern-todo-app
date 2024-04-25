
<h1 align="center">
  <br>
  <a href="https://todo2app.onrender.com/"><img src="https://raw.githubusercontent.com/primalkz/mern-todo-app/main/assets/img.png" alt="Markdownify" width="200"></a>
  <br>
  Todo List Application
  <br>
</h1>

<h4 align="center">A minimal todo list web app made with MERN. ❤️</h4>

<p align="center">
  <a href="https://github.com/primalkz/mern-todo-app/stargazers"><img src="https://img.shields.io/github/stars/primalkz/mern-todo-app?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
  <a href="https://github.com/primalkz/mern-todo-app/issues"><img src="https://img.shields.io/github/issues/primalkz/mern-todo-app?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
</p>

<p align="center">
  <a href="#live-website">Live Website</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-run">How To Run</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/primalkz/mern-todo-app/main/assets/output.gif)

<details>
<summary>Features Video (tap to expand)</summary>
<img src="assets/output.mp4"/ width="800px">
</details>

## Live Website

You can check out by going on this [link](https://todo2app.onrender.com/).

## Key Features

* Users can create new tasks.
* Users can mark tasks as completed or uncompleted.
* Users can edit the tasks in the list.
* Users can delete tasks.
* Modern and user friendly UI.
* Implemented user authentication.
* Users can create their account so all the tasks will be saved in the database.
* Can access tasks from any device by logging in to their account.
* Fast and scalable with mongodb
* Cross platform

## How To Run

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/primalkz/mern-todo-app.git

# Go into the repository
$ cd mern-todo-app

# prepare dependencies and build the webpage
$ npm run postbuild

# Run the app
$ npm run dev
```

## Configuration
Create ```.env``` file inside ```./``` directory and copy the following code

```
MONGO_URI=Your mongodb URI
PORT=5000
JWT_SECRET=a random secret key eg. secretkey
```

## Technology used

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Mongo DB](https://www.mongodb.com/)
- [React](https://react.dev/)
- [Express.js](https://expressjs.com/)
- [Render](https://render.com/)
- [TODO logo](https://www.logoai.com/)

## License

MIT
