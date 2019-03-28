import VueAudio from './components/vue-audio/vue-audio.vue';

declare module 'vue/types/vue' {
    interface VueConstructor {
        install: any
    }
}

VueAudio.install = Vue => Vue.component(VueAudio.name, VueAudio);

export default VueAudio;
