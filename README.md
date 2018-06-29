# TemplateApp

## Installation

### Install the project libraries

```bash
npm install
```

### Install angular cli global if you haven't already (this is optional)

```bash
npm install @angular/cli --save -g
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Generate Library

To generate the documentation with the following command:

```bash
ng generate library library-name  
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Generate documentation

To generate the documentation with the following command:

```bash
npm run doc
```

## Publish Library

1. Commit the package.json file of the library (inside the projects folder) to version that you want to publish.

For instance if you want to publish the version `0.0.1` change the version property to `0.0.1`

```json
   {"version": "0.0.1" }
```

***Commit and push the changes***

2. Make sure that you don't have any pending commits in your working copy

3. Run the following command

```bash
npm run version
```

You can add comments using the following example

```bash
npm run version patch -m "deploy first version"
```

This will run using the npm [version command](https://docs.npmjs.com/cli/version)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
