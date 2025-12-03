---
layout: post
title:  "Getting Started With Git"
date:   2025-08-15
categories:
---
<style>
        .git-logo{
            display: block;
            max-width: 800px;
            width: 30%;
            height: auto;
            margin: -10 auto;
        }
        #git-flow{
            display: block;
            max-width: 800px;
            width: 100%;
            height: auto;
            margin: 0 auto;
        }
        a {
            color: blue
        }
        a:hover{
            color: red;
            background-color: white
        }
    </style>


<h1 style="font-size: 25px">Git Basics</h1>
<br>

<img class="git-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png">

<br>

**Git** has become the worldwide standard for version control. So what exactly is it?


**Git** is a <a href="https://en.wikipedia.org/wiki/Distributed_version_control" target ="_blank">distributed version control</a> system, which means that a local clone of the project is a complete version control repository. These fully functional local repositories make it easy to work offline or remotely. Developers commit their work locally, and then sync their copy of the repository with the copy on the server. This paradigm differs from centralized version control where clients must synchronize code with a server before creating new versions of code.

<blockquote>
  <em>“In software development, distributed version control is a form of version control 
  in which the complete codebase, including its full history, is mirrored on every 
  developer’s computer.” — Wikipedia</em>
</blockquote>


Git is free and open-source software shared under the GPL-2.0-only license. 
➡️ <a href="https://git-scm.com/" target ="_blank">**Download Git**</a>


<h1><u>How Does Git Work?</u></h1>
<hr style="height:10px; visibility:hidden;" />


Git thinks of its data more like a series of snapshots of a miniature filesystem. With Git, every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot. To be efficient, if files have not changed, Git doesn’t store the file again, just a link to the previous identical file it has already stored. Git thinks about its data more like a stream of snapshots.


<span style="color: purple; font-weight: bold">The three states of Git: </span>

1. Modified
2. Staged
3. Committed

<img id="git-flow" src="https://lh7-us.googleusercontent.com/MpGL9X8VgKi1o96riAwbN_4rYwaNyNQboqrd_uBCWW80SfTtstfCybDq7UZ2R4IBZ36BXsXBX8P86ntHdbhBIpU3P5WWfZxTOsAuAv7e2eThReHH2Mj-A7naNL4IZDAtI0C4NC6YL2zht8fMLs2W6aw">

**Writing in Progress...**