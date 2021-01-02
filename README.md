# Text Pipeline

This is the source code for [textpipeline.io](https://textpipeline.io).

## Scripts

This is not an exhaustive list of the scripts available, but rather is the important ones. For a full list look in `package.json`.

| Script                  | Description                          |
| ----------------------- | ------------------------------------ |
| npm run start           | Launch the development server.       |
| npm run start:storybook | Launch the component playground.     |
| npm run test            | Run the tests/linting with coverage. |
| npm run test:watch      | Run the tests in watch mode.         |
| npm run build           | Build the assets.                    |
| npm run deploy          | Deploy the app to production.        |

## Debugging Tests

There is a packaged debug launch config for vscode in the repo. Just set breakpoints in the test and launch it.

## Deployment

This app is deployed to Heroku via the create-react-app buildpack:

- [Heroku](https://www.heroku.com/)
- [create-react-app buildpack](https://github.com/mars/create-react-app-buildpack)

In order to deploy you will first need to:

- [Install the Heroku CLI](https://toolbelt.heroku.com/)
- Login to the Heroku CLI: `heroku login`
- Add the `heroku` git remote: `git remote add heroku https://git.heroku.com/textpipeline.git`

To deploy:

`npm run deploy`
