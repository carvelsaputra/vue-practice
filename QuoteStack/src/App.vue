<template>
    <div class="container">
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue"
    export default {
        components:{
            appQuoteGrid: QuoteGrid
        },
        data(){
            return{
                maxQuotes: 10,
                quotes:[
                    'Just a Quote to see something'
                ],

            }
        }
    }
</script>

<style>
</style>
