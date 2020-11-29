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
          :css="false"
        >
          <div
            style="width: 100px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
        </transition>
        <hr />
        <button
          class="btn btn-primary"
          @click="
            selectedComponent == 'app-success-alert'
              ? (selectedComponent = 'app-danger-alert')
              : (selectedComponent = 'app-success-alert')
          "
        >
          Toggle Components
        </button>
        <br /><br />
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br />
        <br />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              style="cursor: pointer"
              @click="removeItem(index)"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// only can animate 1 element with transision
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";
export default {
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert,
  },
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: "fade",
      elementWidth: 100,
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("Before Enter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("after Enter");
    },
    enterCancelled(el) {
      console.log("enter Cancelled");
    },
    beforeLeave(el) {
      console.log("before Leave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("after Leave");
    },
    leaveCancelled(el) {
      console.log("leave Cancelled");
    },
    addItem() {
      const position = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      // array.splice(index, howmany, item1, ....., itemX)
      // The splice() method adds/removes items to/from an array, and returns the removed item(s).
      this.numbers.splice(index, 1);
    },
  },
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
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move{
  /* attach to any element who change the place */
  transition: transform 1s;
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
