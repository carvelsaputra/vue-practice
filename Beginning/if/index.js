// var app = new Vue({
//     el:'#tes',
//     data:{
//         loginType:'username'
//     }
// })
var app1 = new Vue({
    el:'#tes1',
    data:{
        loginType:'username'
    },
    methods: {
        toggle:function()
        {
            if(this.loginType == 'username')
            {
                this.loginType = 'email'
            }
            else
            {
                this.loginType =  'username'
            }
            
        }
    },
})