Here is my ERD structure for 'Storytime':
![image](https://user-images.githubusercontent.com/100539234/162518135-81160d5b-cad5-43c1-acd7-825686ee91f8.png)

Link to my Trello: https://trello.com/b/SIHvmyR1/sei-project-2-storytime


Rough wireframe draft:

![image](https://user-images.githubusercontent.com/100539234/162536027-11c0d0c6-9a3f-49e2-bd50-fcf56c3e0d65.png)

![image](https://user-images.githubusercontent.com/100539234/162536048-58fe36cc-a28b-42ac-999a-6958b8baf62b.png)

![image](https://user-images.githubusercontent.com/100539234/162536053-830cb165-616d-4685-a197-07bb0dc9a8f2.png)

Routes guide:

![image](https://user-images.githubusercontent.com/100539234/162540996-4c97b6ba-92e2-42c2-9cc5-739070593221.png)






























# passport-boilerplate


This is your passport boilerplate.

## Setup 

1. Clone the repo
2. Rename the folder to your Project
3. Delete the `.git` file, when you are in the root of the file, you can press `ls` and you should see a `.git` file, then go ahead and run `rm -rf .git`


#### Setup your git repo
0. Setup your `.env` file and add all the things you need! (look at mongoose movies for reference!)
1. in the project root `git init`
2. `git add .` to add all the starter code
3. `git commit -m "setup boilerplate"` 
4. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
5. copy the remote address
6. In your terminal add the remote `git remote add origin yourGithubRepo'sAddressGoesHere`
7. `git pull origin master` If a screen pulls up asking you to do something just press `:q` and then `enter` (thats vim btw :) )
8. `git push origin master`

#### Setup your login

0. Setup your database connection string
1. Then Setup Your User Model, 
2. Follow the steps from the lesson plan to get your Google login credentials for your `.env` file (create the file if you haven't), or you can just copy the ones from earlier if you want to reuse them.
3. Setup the Code in your config passport 
4. Setup your callback routes in your `routes/index`
5. Setup a view and test your login!

#### Make a commit 

```git commit -m "setup up oauth and User Model"```
