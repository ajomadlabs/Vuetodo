# Todo Vue App

This aims to help Vue beginners to get started with Vue and understand Vue, Vuex and VueRouter

# Project Overview

This project contains a single component called the TodoComponent. This component helps to enter the tasks, mark tasks that are completed
and render the completed tasks.

This makes use of two methods:

- `addItem()`

- `completeItem(itemPassed)`

`addItem()`

This method dispatches an action to add item to the todo list

`completeItem(itemPassed)`

This method dispatches an action to delete item which is complete from todo list<br>
and add it to the completedlist.

This makes uses of Vuex for maintaining the states.

In the states file we have items

- `taskList`
- `completedList`

Next we have the actions file

- `ADD_TASK`: &nbsp; This helps to add a particular task to the `tasklist`.
- `COMPLETE_TASK`: &nbsp; This helps to delete a completed task from `taskList` and add it to the `completedList`.

Next we have the mutations file

- `MUTATE_TASK_LIST`: This helps to mutate the state of `taskList`
- `MODIFY_TASK_LIST`: This helps to delete an item and mutate the `taskList` with that of the new list
- `MUTATE_COMPLETED_TASK_LIST`: This helps to mutate the state of `completedList`

Last we have the getters file

- `getTaskList`: This helps to get the current state of the `taskList`
- `getCompletedList`: This helps to get the current state of the `completedList`

This makes use `computed property` of Vue to call the getters

It also makes user Vue directives like `v-for` to iterate the taskList and completedList items

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```