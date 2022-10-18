# Todolist with a timer

![the application]("./todoWithTimer/img_test/App_50.png")

This is a tool to keep track of things that need to be done and how long you estimate it will take.
When you are redy to begin the task, you start the timer. Everything is saved in localstorage.

## Current application state

- create task with estimated time.

- start the timer.

- pause the timer by mouse hovering

- mark task as completed and unmark it.

- delete task.

- tasks being saved to localstorage.

## Future development

- task priority

- sort tasks

- be able to create task with partial tasks

- store often used tasks seperatly, to be run again.


## Install and Run

#clone the repo

git clone https://github.com/kw222mi/todoListWithTimer.git

#into the project root

cd todoWithTimer

#get the timer module

The application is built on a timer module, that is not included in this repo.

To run the app you need to copy the Timer.js class and place it in src/components

You vill find the timer module [here](https://github.com/kw222mi/time_component/blob/main/time_component/time_component/src/Timer.js)

#Running Locally

If you want to start the application you can run it locally:

npm install

npm run dev

Runs the app in development mode.

Open http://127.0.0.1:5173/ to view it in the browser



# Code Style

EsLint - eslint.org
[eslint](https://img.shields.io/badge/code_style-standard-brightgreen.svg)

# Contributing

Feel free to contribute to this application. For major changes, 
please open an issue first to discuss what you would like to change.

## DV610-mjukvarukvalité-L2

This is an assignment for the course 1DV610 at Linneus University.
