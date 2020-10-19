Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})
var app7 = new Vue({
    el:'#app-7',
    data:
    {
        listGroseri:
        [
            { id: 1, text: "Ikan" },
            { id: 2, text: "Sapi"},
            { id: 3, text: "Bayam"}
        ]
        
    }
})
//===================================================================================================
Vue.component('blog-post',{
    props:['title'],
    template:'<h3>{{title}}</h3>'
})
var app8 = new Vue({
    el:'#blog-post-demo',
    data:{
        posts:[
            {
                id: 1, title:"Perjalananku"
            },
            {
                id: 2, title:"uhuy"
            },
            {
                id: 3, title:"halo"
            }
        ]
    }
})
//===================================================================================================
Vue.component('button-counter',{
    data: function()
    {
        return{
           count:0
        }
    },
    template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
var app9 = new Vue({
    el:'#components-demo'
})