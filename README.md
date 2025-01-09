# chat
- Chat 
    - express
    - socket.io
    - winston
- npm config get proxy && npm config get registry
- npm install --save express --registry=https://registry.npmmirror.com
- npm install --save socket.io --registry=https://registry.npmmirror.com
- npm install nodemon --save-dev
- log [both winston and debug are widely used]
    - npm install winston | npm i winston | npm install --save winston
    - npm install debug 
        - In Windows CMD: `set DEBUG=app & node main.js` (Powershell does not work)
        - alternatively add "process.env.DEBUG = 'app'" in main.js
## Execution
- `npx nodemon main.js` or `npm start` 