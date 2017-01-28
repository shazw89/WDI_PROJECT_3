## Git Cheatsheet

List all branches:

```bash
$ git branch
```

Creating a branch but not moving onto that branch

```bash
$ git branch <branchname>
```

To change branch, you need to:

```bash
$ git checkout <branchname>
```

To create a branch and checkout in one step: 

```bash
$ gco -b <branchname>
```

## Creating feature branches

You should start on the `development` branch...

Pull to make sure that you have the most recent code changes:

```bash
$ git pull origin development
```

Then let's make a new feature-branch:

```bash
$ gco -b feature-branch
```

Next do some changes on this feature branch. When the code is working:

```bash
$ git add -A
$ git commit -m "made some changes
```

Pull the changes to make sure you have the most recent code:

```bash
$ git pull origin development
```

Next, merge local development onto the branch:

```bash
$ git merge development
```

Fix any conflicts.

Then, once all fixed. Go back to the develpment branch and merge feature branch:

```bash
$ gco development
$ git merge feature-branch
```

Finally push to development and tell your team to pull.

```bash
$ git push origin development
```
