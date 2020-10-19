var vm = new Vue({
    el:'#demo',
    data:{
        firstname:'carvel',
        lastname:'saputaaara'
    },
    // computed: {
    //     fullname: function(){
    //         return this.firstname+" "+this.lastname;
    //     }
    // },
    computed: 
    {
        fullname:
        {
            get:function()
            {
                return this.firstname+" "+this.lastname
            },
            set:function(newValue)
            {
                var names= newValue.split(' ');
                this.firstname = names[0];
                this.lastname = names[names.length -1];
            }
        }
    },
})