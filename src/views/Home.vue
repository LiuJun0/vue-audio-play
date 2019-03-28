<template>
    <vue-component-template :title="title"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueComponentTemplate from '@/components/vue-component-template/index.vue'; // @ is an alias to /src

  @Component({
    components: {
      VueComponentTemplate,
    },
  })
export default class Home extends Vue {
  private title: string = 'Welcome to Your Vue.js + TypeScript App'
}
</script>
