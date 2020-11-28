<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />

        <select v-model="alertAnimation" class="form-control">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>
        <br />
        <button class="btn btn-primary" @click="show = !show">
          Show Alert
        </button>
        <br /><br />
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is Some Info</div>
        </transition>
        <transition :name="alertAnimation" type="animation">
          <div class="alert alert-info" v-if="show">This is Some Info</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is Some Info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">
            This is Some Info
          </div>
          <div class="alert alert-warning" v-else key="warning">
            This is Some Warning
          </div>
        </transition>
        <!-- <transition 
                    enter-class=""
                    enter-active-class="animated bounce"
                    leave-class=""
                    leave-active-class="animated shake"
                    appear
                        
                >
                    <div class="alert alert-info" v-if="show">This is Some Info</div>
                </transition>
        <transition
          appear
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shake"
        > -->
        <!-- <div class="alert alert-info" v-if="show">This is Some Info</div>
        </transition> -->
        <hr />
        <button class="btn btn-primary" @click="load = !load">
          Load / remove Element
        </button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div
            style="width: 100px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// only can animate 1 element with transision
export default {
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: "fade",
    };
  },
  methods:{
    beforeEnter: (el) => {
      console.log('Before Enter');
    },
    enter:(el,done)=>{
      console.log('enter')
      done();
    },
    afterEnter:(el)=>{
      console.log('after Enter');
    },
    enterCancelled: (el)=>{
      console.log('enter Cancelled');
    },
    beforeLeave: (el)=>{
      console.log('before Leave');
    },
    leave: (el, done)=>{
      console.log('leave');
      done();
    },
    afterLeave:(el)=>{
      console.log('after Leave');
    },
    leaveCancelled:(el)=>{
      console.log('leave Cancelled');
    }
  }
};
</script>

<style>
/* fade transition using css property */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1 */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
/* slide transition using css property */
.slide-enter {
  /* transform: translateY(20); */
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 0.5s;
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  transition: opacity 1s;
  animation: slide-out 1s ease-out forwards;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
