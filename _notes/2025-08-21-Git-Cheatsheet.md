---
layout: post
title:  "Git Cheatsheet!"
date:   2025-08-21
categories:
---
<style>
        img{
            display: block;
            max-width: 800px;
            width: 100%;
            height: auto;
            margin: 0 auto;
        }
        a {
            color: blue
        }
        .cmd{
            background-color: lightgreen;

        }
        .head{
            color: red;
            font-weight: bold;
        }
        a:hover{
            color: red;
            background-color: white
        }
    </style>


<span class="head">01 GIT CONFIGURATION</span> (Configuring user information used across all local repositories)

---

⇢ <span class="cmd"> ```git config --global user.name “Your Name”```</span> - Set the name that will be attached to your commits and tags. 

⇢ <span class="cmd"> ```git config --global user.email “you@example.com”```</span> - Set the e-mail address that will be attached to your commits
and tags.

⇢ <span class="cmd"> ```git config --global color.ui auto```</span> - Enable some colorization of Git output.

<br>

<span class="head">02 SETUP</span> (Working with snapshots and the Git staging area)

---


⇢ <span class="cmd">git init [project name]</span> - Create a new local repository in the current directory. If [project name] is provided, Git will create a new directory named [project name] and will initialize a repository inside it.

⇢ <span class="cmd">git clone &lt;project url&gt;</span> - Downloads a project with the entire history from the remote repository.


⇢ <span class="cmd">git status</span> - show modified files in working directory, staged for your next commit.

⇢ <span class="cmd">git add [file]</span> - add a file as it looks now to your next commit (stage).

⇢ <span class="cmd">git reset</span> - unstage a file while retaining the changes in working directory.


⇢ <span class="cmd">git diff</span> - diff of what is changed but not staged.

⇢ <span class="cmd">```git diff --staged```</span> - diff of what is staged but not yet committed

⇢ <span class="cmd">```git commit -m "[descriptive message]"```</span> - commit your staged content as a new commit snapshot.

<br>

<span class="head">03 BRANCH & MERGE</span> (Working with snapshots and the Git staging area.)

---

⇢ <span class="cmd">git branch</span> - list your branches. a * will appear next to the currently active branch.


⇢ <span class="cmd">git branch [branch-name] </span> - create a new branch at the current commit.

⇢ <span class="cmd">git checkout</span> - switch to another branch and check it out into your working directory.

⇢ <span class="cmd">git merge [branch]</span> - merge the specified branch’s history into the current one.

⇢ <span class="cmd">git log</span> - show all commits in the current branch’s history.