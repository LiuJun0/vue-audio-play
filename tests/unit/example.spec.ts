import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/vue-component-template/index.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { title },
    });
    expect(wrapper.text()).to.include(title);
  });
});
