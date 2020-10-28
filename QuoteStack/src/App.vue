<template>
    <div class="container">
<app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>

import QuoteGrid from "./components/QuoteGrid.vue"
import NewQuote from "./components/NewQuote.vue"
    export default {
        components:{
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        },
        data:function(){
            return{
                maxQuotes: 10,
                quotes:[
                    'Just a Quote to see something'
                ],

            }
        },
        methods:{
            newQuote(quote){
                this.quotes.push(quote);
            }
        }
    }
</script>

<style>
</style>
