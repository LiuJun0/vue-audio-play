import VueAudioPlay from './components/vue-audio-play/vue-audio-play.vue';

declare module 'vue/types/vue' {
    interface VueConstructor {
        install: any
    }
}

VueAudioPlay.install = Vue => Vue.component(VueAudioPlay.name, VueAudioPlay);

export default VueAudioPlay;
