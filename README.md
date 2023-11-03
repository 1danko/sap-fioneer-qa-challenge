# sap-fioneer-qa-challenge
QA Challenge for SAP Fioneer

# Test Automation Framework for QA Challenge(SPA Fioneer)

This is a test automation framework that uses js, cypress, mochawesome-reporting and github-actions to run UI tests on a web application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Framework Structure](#framework-structure)
- [Test data](#test-data)
- [Running the tests](#running-the-tests)
- [Reporting](#reporting)

## Prerequisites

- Visual Studio Code 
- Node.js
- Install [open-cli](https://www.npmjs.com/package/open-cli) npm package globally  

## Getting Started

1. Clone or download this repository to your local machine.
2. Open the folder with solution in Visual Studio Code.
3. Open terminal in the solution and run:
```
npm install
```
4. Run the tests using this command:
```
npm run tests-with-report
```

## Framework Structure

The framework consists of the following folders and files:

- **.github/workflows** folder: defines the [gitgub-actions pipeline](https://github.com/1danko/sap-fioneer-qa-challenge/actions) for running the tests after creating pull requests to master branch
- **cypress** 

    ├── **e2e** folder: contains all cypress tests 

    ├── **fixtures** folder: contains test data for the tests 
    
    ├── **pages** folder: contains page objects for the tests
    
    └── **support** folder: contains additional commands and functions for the tests

- **.gitignore** file: specifies the files and folders to be ignored by Git
- **cypress.config.js** file: specifies configuration for cypress and for reporting
- **package.json** file: contains scripts and version of installed npm packages
- **README.md** file: provides an overview of the framework and instructions for usage

## Test Data 

All Test data storing in the `cypress/fixtures` directory 

   - The **SAPFioneerData.json** file contain item texts, urls, titles and additional test data. 

## Running the tests

There are few commands to run the tests:
1. To run the tests **without reporting** use this command:
```
npm run e2e-sap-fioneer-tests
```
2. To run the tests **without reporting in headless mode** use this command:
```
npm run e2e-sap-fioneer-tests-headless
```
3. To run the tests **with reporting** use this command:
```
npm run tests-with-report
```
4. To run the tests **with reporting in headless mode** use this command:
```
npm run tests-headless-with-report
```

## Reporting

This framework use the mochawesome for reporting. To view report, after running the tests run this command:
```
npm run report:merge && npm run report:generate && npm run report:open
```