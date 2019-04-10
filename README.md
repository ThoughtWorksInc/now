[![Build Status](https://travis-ci.org/ThoughtWorksInc/now.svg?branch=master)](https://travis-ci.org/ThoughtWorksInc/now)

# Purpose

This repo will serve as the source code for generating the static website for the German chapter of Network of Women (N.O.W.)

## Authoring Guide

If you want to change the content of the site, find the relevance section in directory: `src/data`. You should be able to edit the markdown files in the browser directly. Github has a WYSIWYG editor.

Here are the steps for editing in the browser:

1. You can start editing by clicking on the _Pencil_ icon on the right hand side.
2. Do not remove the content between the two lines of `---`
3. You can format the content inside. Here is a [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for reference
4. You can **Preview** your changes in the `Preview Changes` tab
5. Once one, at the bottom of the screen you will find a dialog which says **Commit Changes**. Add some notes around what you changed and commit your changes.
6. Automation should pick it up and in a few minutes the [test site](https://test-now-de.herokuapp.com/) should be updated.

