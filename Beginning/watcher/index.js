var watchExampleVm = new Vue({
    el:'#watch-example',
    data:
    {
        question: '',
        answer:'saya tidak bisa memberi jawaban sebelum anda bertanya..'
    },
    watch: 
    {
        //JQUERY
        question:function(newQuestion,oldQuestion)
        {
            this.answer = 'menunggu anda selesai mengetik'
            this.debounceGetAnswer();
        }
    },
    created:function()
    {
        this.debounceGetAnswer = _.debounce(this.getAnswer,500)
    },
    methods: 
    {
        getAnswer: function()
        {
            if(this.question.indexOf('?') === -1)
            {
                this.answer = 'Pertanyaan biasanya berisi tanda tanya..'
                return
            }
            this.answer = 'thinking'
            var vm = this
            axios.get('https://yesno.wtf/api')
            .then(function(response)
            {
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function(error)
            {
                vm.answer = 'ERROR API tidak ditemukan. '+error
            })
        }
    },
})
// computed sifatnya lebih seperti konstanta digunakan jika kita ingin mengubah base suatu data 
// watch lebih seperti jquery berguna mengubah ubah data yang bersifat asynchronous  