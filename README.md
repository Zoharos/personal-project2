### run in dev

* `npm run build:watch` - runs babel to transpile the server from es6 to es5 (watch mode)
* `npm run build:watch:client` - runs webpack to build bundle (watch mode)
* `npm run start:nodemon` - runs nodemon at watch mode

### prod

* `npm run build` - runs babel to transpile the server from es6 to es5 
* `npm run build:client` - runs webpack to build bundle
* `npm run build:prod` - builds both client and server
* `npm run start` - it calls `build:prod` and then runs the app 
