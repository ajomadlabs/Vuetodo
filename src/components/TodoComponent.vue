<template>
  <div>
    <!-- Header -->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <center>
          <div class="todo-header">Todo List App</div>
        </center>
      </div>
    </div>
    <!-- End -->
    <!-- Input Box -->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <center>
          <input class="todo-input" v-on:keyup.enter="addItem()" placeholder="Add an item to your list" v-model="todoItem" type="text" />
        </center>
      </div>
    </div>
    <!-- End -->
    <!-- Tasks List Header-->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <center>
          <div class="todo-task-header">
            Task List
          </div>
        </center>
      </div>
    </div>
    <!-- End -->
    <!-- Task List Items -->
    <div v-if="taskList.length > 0" class="row">
      <div v-for="(item, i) in taskList" v-bind:key="i" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <center>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="todo-task-item-right" v-on:click="completeItem(i, item)">Complete</div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="todo-task-item-left">{{item}}</div>
            </div>
          </div>
        </center>
      </div>
    </div>
    <!-- End -->
    <!-- Task List Items -->
    <div v-if="taskList.length <= 0" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <center>
          <div class="todo-task-item">No Tasks Left</div>
        </center>
      </div>
    </div>
    <!-- End -->
    <!-- Completed Task Header -->
    <div v-if="completedList.length > 0" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <center>
          <div class="todo-task-header">
            Completed Tasks
          </div>
        </center>
      </div>
    </div>
    <!-- End -->
    <!-- Completed Task List -->
    <div v-if="completedList.length > 0" class="row">
      <div v-for="item in completedList" v-bind:key="item" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <center>
          <div class="todo-task-item">{{item}}</div>
        </center>
      </div>
    </div>
    <!-- End -->
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      todoItem: ''
    }
  },
  methods: {
    addItem: function () {
      this.$store.dispatch('ADD_TASK', {taskList: this.todoItem})
    },
    completeItem: function (index, itemPassed) {
      this.$store.dispatch('COMPLETE_TASK', {item: itemPassed})
    }
  },
  computed: {
    taskList () {
      return this.$store.getters.getTaskList
    },
    completedList () {
      return this.$store.getters.getCompletedList
    }
  }
}
</script>

<style scoped>
.todo-header {
  font-family: monospace;
  font-size: 2em;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: 2%;
}

.todo-input {
  border: 1px solid #ebebeb;
  font-family: monospace;
  padding-left: 12px;
  padding-top: 8px;
  margin-top: 2%;
  width: 20%;
  height: 50px;
  color: #000;
}

.todo-task-header {
  font-family: monospace;
  font-size: 1.5em;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}

.todo-task-item-left {
  font-family: monospace;
  font-size: 1.3em;
  color: #000;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: left
}

.todo-task-item-right {
  font-family: monospace;
  font-size: 1.3em;
  color: #000;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: right;
}

.todo-task-item-right:hover {
  cursor: pointer;
}

.todo-task-item {
  font-family: monospace;
  font-size: 1.3em;
  color: #000;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
}
</style>
