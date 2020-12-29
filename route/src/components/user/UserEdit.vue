<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height:700px"></div>
    <p id="data">Some Extra Data</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      confirmed: false
    }
  },
  beforeRouteLeave (to, from, next) {
    //if button got clickked go to another page
    if(this.confirmed){
      next();
    }
    else{
      // if not clicked confirmed browser will confirm do you want to leave the page
      if(confirm('Are you Sure ?')){
        next();
      }
      else{
        next(false);
      }
    }
  }
}
</script>
