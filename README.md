# Backend for Role-Based-Authentication 

### Initialize NodeJs project
```
npm init -y
```

### Install Required packages 
```
npm i express jsonwebtoken bcryptjs dotenv mongoose

npm i nodemon --save-dev
```

### Write dev script in package.json file 
```js
{
 "scripts": {
    "dev": "nodemon src/index.js",
    // 
  }
}
```

### Run the Nodejs Server 

```
npm run dev
```

### Create MongoDb Database and Add connection string in .env file 
```
PORT = 7001
CONNECTION_STRING = mongodb+srv://databaseuser:password@cluster0.y1fbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET = 

```