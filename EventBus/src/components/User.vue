<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name !</button>
    <p>Name is {{ name }}</p>
    <p>Age is {{age}}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          :userAge="age"
          :resetFn="resetName"
          @nameWasReset="name = $event"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge="age"
          @ageWasEditted="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "carvel",
      age: 17,
    };
  },

  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  methods: {
    changeName() {
      this.name = "Saputra";
    },
    resetName() {
      this.name = "carvel";
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
