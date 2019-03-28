<template>
  <div class="vue-component-template">
    <h1>{{ newTitle }}</h1>
    <Button @click="onClick">按钮</Button>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { Button } from 'element-ui';

@Component({
  components: {
    Button,
  },
})
export default class VueComponentTemplate extends Vue {
    name:string = 'vue-component-template'

    @Prop({
      required: false,
      default: 'default',
    }) private title!: string

    private newTitle : string = ''

    public onClick(): void {
      this.newTitle = 'Hello world!!!';
    }

    @Watch('title', { immediate: true, deep: true })
    onTitleChange(newValue: string, oldValue: string) {
      this.newTitle = newValue;
    }

  // created() {
  //   //
  // }

  // activated() {
  //   //
  // }

  // mounted() {
  //   //
  // }
}
</script>
<style lang="scss" scoped>
  .vue-component-template {
    text-align: center;
  }
</style>
