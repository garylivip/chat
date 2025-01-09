# chat
- Chat 
    - express
    - socket.io
    - winston
    - debug
    - dotenv
    - pm2
- npm config get proxy && npm config get registry
- npm install --save express --registry=https://registry.npmmirror.com
- npm install --save socket.io --registry=https://registry.npmmirror.com
- npm install nodemon --save-dev
- log [both winston and debug are widely used]
    - npm install winston | npm i winston | npm install --save winston
    - npm install debug 
        - In Windows CMD: `set DEBUG=app & node main.js` (Powershell does not work)
        - alternatively add "process.env.DEBUG = 'app'" in main.js
- npm install dotenv

## Execution
- `npx nodemon main.js` or `npm start` 
- npm install -g pm2 --registry=https://registry.npmmirror.com

## Global installation
## Using pm2
- Install pm2 globally: `npm install -g pm2`
- Start the application with pm2: `pm2 start main.js --name "chat-app"`
- Save the pm2 process list: `pm2 save`
- Set up pm2 to start on system boot: `pm2 startup`

## Managing pm2
- List all applications: `pm2 list`
- Stop a specific application: `pm2 stop chat-app`
- Stop all applications: `pm2 stop all`
- Delete a specific application: `pm2 delete chat-app`
- Delete all applications: `pm2 delete all`