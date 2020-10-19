var app = new Vue({
    el:'#app1',
    data:
    {
        numbers:[1,2,3,4,5]
    },
    computed: 
    {
        evenNumbers:function()
        {
            return this.numbers.filter(function(numbers){
                return numbers % 2 === 0
            })
        }
    },
})
var app2 = new Vue({
    el:'#app2'
})
var app3 = new Vue({
    el:'#app3',
    data:{
        items:'1'
    }

})

