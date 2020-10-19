Vue.component('todo-item',{
    template:'\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
    props: ['title']
})
var app = new Vue({
    el:'#todo-list-example',
    data:{
        newTodoText: '',
        todos:
        [
            {
                id: 1,
                title: "biar maju"
            },
            {
                id: 2,
                title: "belajar vuejs"
            },
            {
                id: 3,
                title: "harus bisa"
            }
        ],
        nextTodoId: 4
    },
    methods: 
    {
        addNewTodo: function()   
        {
            this.todos.push({
                id:this.newTodoId++,
                title:this.newTodoText
            })
            this.newTodoText = ' '
            
        } 
    },


})