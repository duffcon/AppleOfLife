# TreeApple


Ng new won't work if README or .gitignore exists.
```
git clone _new_github_repo_
rename .gitignore to .gitignore2
rename README.md to README.md2

ng new myproject --skip-git --directory .

delete .gitignore
delete README.md 

rename .gitignore2 back to .gitignore
rename README.md2 back to README.md 
```

Check everything works.
```
ng serve
```





