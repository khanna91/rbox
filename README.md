RBox - Help Widget
==================

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/khanna91/rbox <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works, assuming you have npm installed globally ;)

```bash
$ npm install                   # Install project dependencies
$ npm run build                 # Compile and build assets and all in local mode and create a dist directory
$ npm run serve                 # It will serve the application with the help of browser-sync
$ npm run postinstall           # It performs the same function as above, on top of that it keeps an watch on changes (useful while developing ;) )
```

## Run Application locally

```bash
$ http://localhost:3000
```

## Application Structure

```
.
├── dist                     # Contains final code after compilation and minification
├── src                      # Application source code
│   ├── js                   # Contains js file which is used in project for few user actions
│   └── scss                 # Contains scss file for styling
├── .gitignore               # Git uses it to determine which files and directories to ignore, before you make a commit.
├── index.html               # The root page of the application, contains all the html
└── package.json             # Contains all the node module components dependencies which is required by app
```

## Thank You
