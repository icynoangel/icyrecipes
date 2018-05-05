
### IcyRecipes is a custom configuration based on ejected create-react-app 

### Modules this package includes

* redux
* redux-thunk
* immutablejs
* superagent
* node-sass
* csstyle
* kss
* enzyme
* nock
* redux-mock-store
* gulp (only for kss)
* jest-sonar-reporter
* storybook

### npm scrips

* start - build in dev mode
* build - build for production
* test - run unit tests
* coverage - generate coverage report
* dev - run both server and client in development mode
* devserver - run only server in development mode
* server - run server in production mode
* flow - run flowtype check (flow isn't used though)
* eslint - run eslint
* beautify - use prettier to beautify code
* storybook - run storybook in dev mode
* build-storybook - build story book for production 

### It has hooks setup to run on commit

* beautify code
* run eslint
* run unit tests

### Sonar report

* see sonar-project.properties file
* will generate files for SonarQube scanner when coverage is run


### kss-node

This is setup to run with gulp (you will need gulp installed globally)

```
npm install -g gulp
gulp kss
```

### Unit tests samples for

* React Components
* redux sync and async actions
* redux reducers
* redux providers
* app state

Tested with node 8.7.0

Enjoy!