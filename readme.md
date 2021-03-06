# Simple React Boilerplate

This is a very simple app set-up that gets you up and running with React! It comes set up with:

- Webpack, to set up a localhost server
- Babel, for compiling ES6 and React code to be compatible for all browsers
- A Sass compiler, for writing nicer stylesheets
- [Foundation](http://foundation.zurb.com/), for easy styling
- React and ReactDOM, of course, for writing React of course!

It is also set up with tests, using Jasmine (for our basic JS tests), Karma (as our test runner) and Enzyme (for testing our React code).

## How to use

### Downloading and configuring

Download the project:

```
git clone https://github.com/cmkoller/simple-react-boilerplate.git
```

Remove the existing Git history and start your own:

```
rm -rf .git && git init && git add -A && git commit -m 'Initial commit'
```

Open `/package.json` and edit the name listed on line 2 to match the name of your app.

Open `/build/index.html` and update the title of the site, on line 5.

In your terminal window, run `npm install`

### Running and viewing the project

To view the project in your browser, run `npm start`.

Open [http://localhost:8080](http://localhost:8080) in your browser to view the project!

### Updating the project

Add new React components to `/src/components`. Currently, `/src/components/App.js` is being loaded and rendered - update the contents of that component to start changing the rendered view!

### Testing

Run the test suite by typing `npm test`. Once that is running, you can also view your tests running by opening `http://localhost:9876/` in your browser!

Currently, there is one sample test: `/test/sampleTest.js`. Either update this existing test or duplicate its structure to create your own! Also feel free to rearrange your new test files into subdirectories inside the `/test` directory for better organization.
