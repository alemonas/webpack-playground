# webpack playground

## PART 1: Webpack from scratch

- 1.1. using webpack for first time
- 1.2. Adding npm scripts for environment builds
- 1.3. setting up debugging
- 1.4. Coding your first Module
- 1.5. Adding Watch mode
- 1.6. ES Module Syntax
- 1.7. CommonJS Export
- 1.8. CommonJS Named Exports
- 1.9. Add Prettier (format code)
- 1.10. Tree Shaking (dead code elimination)
- 1.11. Webpack Bunlde Walktrough
- 1.12. Add webpack configuration example
- 1.13. Explain webpack main.js generated file on development

## PART 2 - Config Webpack

- 2.1. Create a config file and change the output
- 2.2. Change config to return a function instead of an object
- 2.3. Passing variables to webpack config
- 2.4. Add webpack plugins
  - Install html-webpack-plugin
  - user plugin in config
- 2.5. Seeting up a local server
  - install webpack-dev-server (web server based on express)
    - instead of creating a bundle in the dist folder, generates a bundle in memory and it serves that information up to Express which then does a web socker connection to send updates
  - add script for webpack-dev-server
  - Improve button module (with html elements)
  - Improve footer module (with html elements)
- 2.6. Splitting environments config files
  - add modeconfig to webpack config
  - add default values to webpack params
  - install webpack-merge to use default config and merge with the other individual configs (prod, dev)
  - create build-utils with webpack.dev... webpack.prod.. config files
  - change output file on production to test
    - [chunkhash.js] // string interpolate
- 2.7. Create a rule and loader to use css styles
  - create a ccs file
  - add it in webpack dev config
