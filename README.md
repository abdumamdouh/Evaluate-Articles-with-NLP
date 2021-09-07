# Evaluate Articles with NLP, A MeaningCloud Frontend

## Table of Contents

- [Summary](#Summary)

- [Technologies](#Technologies)

- [Features](#Features)

- [Unit Testing](#Unit-Testing)

- [Structure](#Structure)

- [Usage and Installation](#usage-and-installation)

## Summary

Evaluate Articles with NLP is a frontend for MeaningCloud

It uses a NodeJs backend server to connect and resolve MeaningCloudAPI to retrieve content sentiment (Agreement, Subjectivity, Confidence, Irony).

Webpack was the buildtool of choice and was configured according to the project requirements.

It demonstrates my understanding of Webpack, Webpack's loaders, Webpack's plugins, Preprocessed styles (Sass) and NodeJS.

## Technologies

NodeJS was used as the server.
Webpack was used as the buildtool.
Jest was used for the unit-testing.
HTML, CSS, JS, SASS used for the front end.
Axios was used to handle web requests in the backend.

## Features

1. NodeJS backend configured with DotEnv to retrieve.

2. NodeJS backend configured with Axios to make web requests to the API.

3. Webpack configured with loaders and plugins for the buildtool.

4. Validate the input using regular expressions to make sure the link is valid.

5. Display sentiment (Agreement, Subjectivity, Confidence, Irony) from MeaningCloud.

6. Implemented service workers to serve cached versions of the website.

7. Implemented unit testing for the javascript functions using Jest.

## Unit Testing

Two test files that include three tests are included in the _test_ folder.  
To Run the tests

```Batchfile
npm run test
```

## Structure

```Batchfile
|   .babelrc
|   package-lock.json
|   package.json
|   webpack.dev.js
|   webpack.prod.js
|
+---src
|   +---client
|   |   |   index.js
|   |   |
|   |   +---images
|   |   |       favicon.png
|   |   |       logo.png
|   |   |       robot.gif
|   |   |
|   |   +---js
|   |   |       handleFormSubmit.js
|   |   |       checkURL.js
|   |   |
|   |   +---styles
|   |   |       base.scss
|   |   |       footer.scss
|   |   |       form.scss
|   |   |       header.scss
|   |   |       resets.scss
|   |   |
|   |   \---views
|   |           index.html
|   |
|   \---server
|           index.js
|           mockAPI.js
|
\---_test_
        testhandleFormSubmit.test.js
        testcheckURL.test.js

```

## Usage and Installation

Make Sure Node and NPM are installed.

```Batchfile
node -v
npm
```

Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

Configure environment variables using dotenv package:
-Install the dotenv package

```Batchfile
   npm install dotenv
```

-Create a new `.env` file in the root of your project
-Fill the `.env` file with your API key like this:

```Batchfile
API_KEY=\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***
```

You can get the project up and running in 3 simple steps.

1. Use the following command to install the required packages

```Batchfile
npm install
```

2. Use the following command to build the project using webpack

```
npm run build-prod
```

Alternatively a development build is also available using

```
npm run build-dev
```

3. Use the following command to run the server

```
npm start
```
