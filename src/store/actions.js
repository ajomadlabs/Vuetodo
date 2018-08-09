export default {
  ADD_TASK ({ commit }, payLoad) {
    commit('MUTATE_TASK_LIST', {taskListData: payLoad.taskList})
  },
  COMPLETE_TASK ({ commit }, payLoad) {
    commit('MODIFY_TASK_LIST', {taskItem: payLoad.item})
    commit('MUTATE_COMPLETED_TASK_LIST', {completedListData: payLoad.item})
  }
}
