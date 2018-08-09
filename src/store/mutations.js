Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key))
}

export default {
  MUTATE_TASK_LIST (state, { taskListData }) {
    state.taskList.push(taskListData)
    localStorage.setObj('taskList', state.taskList)
  },
  MODIFY_TASK_LIST (state, { taskItem }) {
    var arr = state.taskList
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === taskItem) {
        arr.splice(i, 1)
        break
      }
    }
    state.taskList = arr
    localStorage.setObj('taskList', state.taskList)
  },
  MUTATE_COMPLETED_TASK_LIST (state, { completedListData }) {
    state.completedList.push(completedListData)
    localStorage.setObj('complete', state.completedList)
  }
}
