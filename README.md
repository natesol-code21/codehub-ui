# aurelia-skeleton-navigation

## Running The App

To run the app, follow these steps:

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.
4. Ensure that [aurelia-cli](http://jspm.io/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g aurelia-cli
  ```

5. To run the app, execute the following command:

  ```shell
  au run --watch
  ```

## Bundling
The build and bundling is performed by the Aurelia CLI. 

### To buble (build) the application for production environment, execute the following command:
``` shell
au build --env prod
```
 - It is possible to change environment by passing the flag --env with the values: **dev**, **stage** or **prod**.
 - It will create the bundle files under the **scripts** folder.
 - The configuration of the bundle is manage throught he **aurelia.json" file under the **aurelia_project** folder.

## Running The Unit Tests

Unit tests are running through the aurelia-cli and uses [karma](https://karma-runner.github.io) and [jasmine](https://jasmine.github.io/) to execute the tests.

### To execute the unit tests, execute the following command: 
```shell
au test
```

### To execute the unit in a Test Driven Development (TDD) mode: 
```shell
au test --watch
```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver-update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Make sure your app runs and is accessible

  ```shell
  au run
  ```

5. In another console run the E2E-Tests

  ```shell
  au protractor
  ```

## Exporting bundled production version
To create a distribution package that includes all the assets, execute the following command.
```shell
au package-bundle --env prod
```
By default a **dist** folder will be created and all the required files will be copied to it.

The configuration of the bundle is manage throught he **aurelia.json" file under the **aurelia_project** folder...

