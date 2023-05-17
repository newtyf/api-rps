<h1 align="center"><b>API RPS</b></h1>
<h6 align="center">api for multiplayer rock, paper and scissor game</h6>

<!-- <div align="center"><img src="https://user-images.githubusercontent.com/87625663/175834772-e3d38dbf-e1a9-4d34-9a97-6520aec2896f.png" alt="game-image" width="400" /></div> -->

<!-- <p align="center">Live Site <a href="https://newtpomofocus.netlify.app">Here</a>.</p> -->

1. Bootstrapped with [Express](https://expressjs.com/).

## 👾 Set Up

1. Node Version

```sh
$ node version 18.7.0
"you need use this node version or lastest for play music with opus"
```

2. Create an .env file based on .env.example

```sh
  PORT= # required
  MONGO_URI= # required
```

3. Install the dependencies

```sh
 npm install
```

4. Start development server

```sh
 npm run dev
```

## 👾 Build and Run for production

1.- Without Docker
- Generate a build

  ```sh
  npm run build
  ```
- Run with
  ```sh
  npm run start
  ````

2.- With Docker
- It depends of your server service, but you can start the application very easly with:

  ```sh
  docker compose up
  ```
  - this build and create containers for run the app with mongo, you dont need a mongo uri

### 🛠 Built with

- Nodejs
- Typescript
- Express
- Mongoose
- MVC-based

### 💻 Author

- Portfolio - [@newtyf](https://newtyf.com/)
- Instagram - [@newtyf](https://www.instagram.com/newt_yf/)
- LinkedIn - [@newtyf](https://www.linkedin.com/in/axel-mu%C3%B1oz/)
- Frontend Mentor - [@newtyf](https://www.frontendmentor.io/profile/TREz-bits)
