import { createApp } from "vue";

createApp({
  data() {
    return {
      items: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      this.items.push({ title: this.newTodo, done: false });
      this.newTodo = '';
    },

    removeTodo(index) {
      console.log(index);
      this.items.splice(index, 1);
    },
  }
}).mount('#todosContainer');
