<template>
  <img :class="[imgLogo]" alt="Vue logo" src="../../assets/logo.png" />
  <div :class="[counterDiv]">
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent }from 'vue';
import { styles } from './HelloWorld.css';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0);

    return {
      count,
      imgLogo: styles.imgLogo,
      counterDiv: styles.counterDiv,
    };
  },
});
</script>
