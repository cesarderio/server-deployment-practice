# server-deployment-practice

Server deployment practice work repo

Creating a server demo on morning of first day of class.

## [Deployed Server](https://server-deployment-practice.onrender.com/)

## LAB: Node Ecosystem, CI, CD

Time to get hands on with Node.js development! Today, you’ll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

## The Setup

### Github

Create a new repository at GitHub, called server-deployment-practice
  Select the “Add a README” option
  Select the “Add a .gitignore” option, and choose Node.js
  Opt for the MIT license

Clone this to your local machine.
Immediately create a “dev” branch to do your work in git checkout -b dev

### Cloud Deployment Configuration

Refer to the documentation for deploying your express application the cloud.

### The Code

You’ve been provided a working demo server by your instructor. Get this code working locally. Note that while you are permitted to simply copy the files, it’s better if you create the server from scratch, typing the lines of code in the demo provide. Build up your muscle memory.

Initialize your app – **npm init -y**
Install your dependencies – **npm install dotenv express jest**
Create the files and folders required for the application
Create the correct content in the files
Test your server – **npm test**
  You should see 100% of tests passing

Start your server – nodemon
  Visit <http://localhost:3000/data> in your browser to confirm that the server is visible

## Deploy

Now that you have it all running, let’s get it deployed.

### First: Deploy to Dev

Complete an **ACP** on your dev branch.
Go immediately to the repository on GitHub and open the actions tab
  You should see your tests running
  If they were passing on your local machine, they’ll also pass here

Once your tests have passed, go to your cloud service provider and look at your dev app’s **Activity**. It should show you an active deployment

When it completes, go to the app URL and open your server in the browser, you should see the same results as you saw locally.

## Second, go to production

Once your dev run has completed, you have successfully deployed your application through github, with tests, to the cloud

Now, we’re going to complete the “real” deployment process

  Go to your repository on GitHub
  Open a pull request from dev to main
  If your tests are passing, you will be able to merge this branch
  Once you merge, the tests will run again using GitHub actions
  Once the tests pass, your cloud service provider will build and deploy your “main” branch to your “production” app!
  When that process completes, open your app in the browser to prove it.

## Document your work

Open up the README.md file in your editor. It should contain the notes your instructor provided during their demo
Change the URLs to point to your deployed applications, your Github actions, and your pull request
Add your drawings and notes
ACP this to your dev, then master
Assignment Submission Instructions
In Canvas, submit a link to your completed README.md file from the dev branch. Your grader will make any notes to you in the PR itself.

Refer to the the Submitting Standard Node.js Lab Submission Instructions for a review of the complete lab submission process and expectations
