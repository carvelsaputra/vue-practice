var app = new Vue(
{
    el:'#static-class',
    data:
    {
        isActive: true,
        error: null
    },
    computed:
    {
        classObject: function()
        {
            //ngecek terus apakah classobject ada yang berubah
            return{
                active: this.isActive && this.error,
                //nilai default
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }


})
