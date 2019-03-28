import VueComponentTemplate from './components/vue-component-template/index.vue';

declare module 'vue/types/vue' {
    interface VueConstructor {
        install: any
    }
}

const components = [
  VueComponentTemplate,
];

const install = (Vue:any): void | any => {
  if ((install as any).installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export {
  install,
  VueComponentTemplate,
};
