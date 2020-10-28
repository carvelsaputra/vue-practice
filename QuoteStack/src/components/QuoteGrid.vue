<template>
  <div class="row">
      <app-quote v-for="(quote,i) in quotes" :key="i" @click.native="deleteQuote(i)">{{quote}}</app-quote>
  </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
    components:{
        appQuote: Quote
    },
    props:['quotes'],
    methods:{
        deleteQuote(i){
            this.$emit('quoteDeleted',i);
        }
    }
};
</script>
<style></style>
