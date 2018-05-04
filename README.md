[![CircleCI](https://circleci.com/gh/aconfee/payr-web.svg?style=svg)](https://circleci.com/gh/aconfee/payr-web)

# Payr
###### http://payr.com.s3-website-us-west-2.amazonaws.com/

### Description
Super secret.

### Setup

Assuming you're starting from scratch, here's how to set everything up for development. 
1. Clone and download this repo. 
2. Run `npm install` to download dependencies.
3. Happy developing! 

### Stack
* React (generated from create-react-app https://github.com/facebook/create-react-app)

### Environment and Workflow
* `npm start` to start running on port 3000.
* `npm test` to run all unit tests.
* `npm run storybook` will run Storybook on port 9009 https://storybook.js.org/ for developing individual components.
* .vscode/launch.json included with VS Code defaults.

### Git branching

* Checkout `develop` branch. 
* Branch your feature off of develop. 
* After feature is tested locally, create a pull request. 
* Pull request must be approved and have all CI checks passing before it can merge. (This is enforced automatically.)
* Merge feature to develp when conditions met.
* Develop will be merged to master (which is live) when develop's build and deploy status is good (enforced), and the develop environment, dev.tinycrit.com, is manually tested. 
* Merging with dev and master will automatically deploy to each respective environment. 

### Build
* `npm run build` to build and output to ./build

### Deploy

Simply push to, or merge a commit to the master branch. 

This repo is being watched by CircleCI https://circleci.com/gh/aconfee/tinycrit-web. It will be deployed to the tinycrit.com S3 bucket and live on www.tinycrit.com. 

### Architecture
* Served from S3 and Cloudfront
* Routed through Route 53
* Domain in Google Domains
* This repo is the view only. No backend, server, api, etc. are here.   