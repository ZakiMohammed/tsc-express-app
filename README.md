# Typescript with Express Node

Getting Started with NodeJS Express using TypeScript

#### Install Typescript Compiler Globally
```
npm i -g typescript
```
#### Typescript Initialize
```
tsc --init
```
#### Updating TS Configuration
1. Update `target` from "es5" to "es6"
2. Update the `outDir` from './' to './dist' which will contains the compiled JS files
3. Update the `rootDir` from './' to './src' which will contains TS files
4. Uncomment `moduleResolution` to "node"
```
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "./dist",
        "rootDir": "./src",
        "moduleResolution": "node"
    }
}
```
#### Initialize NPM
Initialize NPM for further configurations
```
npm --init
```

#### Install Express
Run the following command to install express as dependencies
```
npm i express
```

#### Install Dev Dependencies 
Run the following command to install typescript, ts-node, nodemon, @types/node and @types/express as dev dependency (we don't need these for production we need it for development)
```
npm i -D typescript ts-node ts-node-dev @types/node @types/express
```
The `-D` above is for dev-dependencies. The dependencies in `package.json` will be as follows after running the above command:
```
"dependencies": {
    "express": "^4.17.1"
},
"devDependencies": {
    "@types/express": "^4.17.4",
    "@types/node": "^13.9.8",
    "ts-node": "^8.8.1",
    "ts-node-dev": "^1.0.0-pre.60",
    "typescript": "^3.8.3"
}
```

#### Update Package JSON Script
Update the `package.json` script command as follows:
```
"scripts": {
    "start": "node dist/server",
    "build": "tsc -p .",
    "watch": "ts-node-dev --respawn --transpile-only ./src/server.ts"
}
```

#### Starter App.ts Code
Write the following code in `src/app.ts` file to test the `npm run dev` command to start the server
```
import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('Server running...'))
```

#### Add Typescript flavour to App.ts Code
Now lets talk in Typescript way. Add the types to these type less variables
```
import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('Server running...'))
```