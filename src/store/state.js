Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key))
}

if (localStorage.getObj('taskList') === [] && localStorage.getObj('complete') === []) {
  localStorage.setObj('taskList', [])
  localStorage.setObj('complete', [])
}

export default {
  taskList: localStorage.getObj('taskList'),
  completedList: localStorage.getObj('complete')
}
