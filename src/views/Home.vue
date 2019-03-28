<template>
    <vue-audio :value="audioUrl" :audioStyle="{ width: '340px' }">
      <span slot="option1" @click="option1Event">Edit</span>
      <span slot="option1">Delete</span>
    </vue-audio>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueAudio from '@/components/vue-audio/vue-audio.vue'; // @ is an alias to /src

@Component({
  components: {
    VueAudio,
  },
})

export default class Home extends Vue {
  name: string = 'home'

  private audioUrl: object = {
    url: 'http://img95.699pic.com/audio/877/777/2_all.mp3',
    name: 'BattleField',
  }

  /**
   * option1Event
   */
  public option1Event() {
    console.log('option1 content');
  }
}
</script>
