<template>
  <header :class="[primary, headerContainer]">
    <h1 :class="[title]">Title</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { styles }from './Header.css';
import { variant } from '../../styles/variables.css';

export default defineComponent({
  setup() {
    return {
      headerContainer: styles.headerContainer,
      title: styles.title,
      primary: variant.primary,
    };
  },
});
</script>
