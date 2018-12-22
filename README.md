# Project Title

A Typescript hello world example for use with AWS Lambda. Includes a unit testing strategy as well as a bundling and multi-stage deploy strategy using AWS CodeBuild. Note, you will need to back into the deploy strategy from the buildspec as the README does not include instructions to setup automated deployments at the time of this writing.

## Running unit tests

A single test is included for demonstration purposes.

```
npm run test
```

## Bundling

Creates a .zip file for upload to S3/Lambda. After running the below command, you can find your bundle in build/bundle.zip.

```
npm run deploy:beta
```

## Deployment Strategy 1 - Manual

The bundled code needs to be uploaded into AWS Lambda. To do so:

1. Open the AWS console and the hello world lambda function.
2. Scroll down to the *Function code* section.
3. Change the "Code entry type" dropdown to read "Upload a .zip file".
4. Change the "Handler" field to "index.hello".
5. Click the "Upload" button and select your .zip file.
6. Scroll back up to the top of the page and click the "save" button.

## Deployment Strategy 2 - Automated with Codebuild

TODO

## Testing

You can test the lambda using the usual method offered by the Lambda UI:

1. Open the AWS console and the hello world lambda function.
2. Click the "Test" button in the upper right hand corner.
 1. If you haven't created a test for your lambda yet, simply take the default json and name your new test something.
3. If the lambda is successful, you'll see a green box at the top of the page. Upon expanding "Details", you should see "Hello, World" in the results box.

## Built With

* [Npm](https://www.npmjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)

## Contributing

Feel free to send any PRs or feedback.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
