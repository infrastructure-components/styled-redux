# Infrastructure-Components: Styled-Redux

This project is an example of how to setup a project
with infrastructure-components, styled-components, and react-redux.


## Install

Download/Clone this repository and run `npm i`


### Build

Simply use `npm run build` to build your app. Your `package.json` defines this command (`scripts build src/index.tsx`).
As you can see, this points the entry-point of your app.

**NOTE**: Running the `build`-command adds further scripts to your `package.json`: `${stackname}`,
`deploy-${env-name}`.

### Run your WebApp in Hot-Development-Mode

When you develop a React-App, you may want to see your changes directly. Use the script `npm run ${stackname}`.
This starts the webpack-hot-middleware.

Open your the url `localhost:3000` in a browser.

Your changes become effective once you reload the browser-page. Have a look at the output of
your console to not miss any error messages.


### Deploy your App to AWS

1. Specify a different stackname than `styled-redux`.

2. If you specified an `Environment` in your app, the `build` command adds a script `deploy-{env-name}`.
This command `npm run deploy-{env-name}` deploys your app to AWS. The script displays the url of your deployed app, e.g.
`http://{stackname}-{env-name}.s3-website-{region}.amazonaws.com`


You must specify the credentials of a programmatic AWS account in your `.env` file, like:

```
AWS_ACCESS_KEY_ID=****
AWS_SECRET_ACCESS_KEY=****
```

## Help and Support

Have a look at our [documentation](https://infrastructure-components.readthedocs.io).

Infrastructure-Components are under active development. If you find a bug or need support of any kind,
please have a look at our [Spectrum-Chat](https://spectrum.chat/infrastructure).

Further, we frequently publish descriptions and tutorials on new features on [Medium.com](https://medium.com/@fzickert).