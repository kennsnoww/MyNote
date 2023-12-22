Instructions


Clone the repository using 'Use template' (and don't forget to give us a Star / Follow on Github, please!)
Select which framework from 'apps/' folder you are going to use and remove the others if necessary.
Search + Replace all instances of 'example-app-"frameworkName"-e2e' with your app name (important to do this first)
Search + Replace all instances of 'example-app-"frameworkName"' with your app name
Change the folder names for example-app-frameworkName and example-app-frameworkName-e2e to what you named for steps #1 and #2
Search + Replace all instances of 'openforge-ionic-monorepo-example' with your project name
Search + Replace 'company-name' with your company name. This is the NX project scope that allows you to import libraries using @company-name
That's it for the renaming! Now to test...

npm install

npx nx run example-app-angular:serve (where example-app-angular is the name you replaced with above)

You should now load your example app!
