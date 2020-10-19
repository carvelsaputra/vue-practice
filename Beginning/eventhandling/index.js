var app = new Vue
({
    el:'#example-2',
    data:{
        name:'Carvel'
    },
    methods: 
    {
        greet:function(event)
        {
            alert(`Hello ${this.name} !`)
            if(event)
            {
                alert(event.target.tagName)
            }
        }       
    },
})
app.greet()