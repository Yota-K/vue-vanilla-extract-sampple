<template>
  <Header />
  <main :class="[containerStyle]">
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </main>
</template>

<script lang="ts">
import './styles/global.css';
import Header from './components/Header/Header.vue';
import HelloWorld from './components/HelloWorld/HelloWorld.vue';
import { containerStyle }from './styles/base.css';

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld,
  },
  setup() {
    return { containerStyle }
  },
}
</script>
