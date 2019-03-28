import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import VueAudio from '@/components/vue-audio/vue-audio.vue';

describe('VueAudio.vue', () => {
  it('renders props.msg when passed', () => {
    const value = {
      url: 'http://img95.699pic.com/audio/877/777/2_all.mp3',
      name: 'BattleField',
    };
    const wrapper = shallowMount(VueAudio, {
      propsData: { value },
    });
    expect(wrapper.text()).to.include(value);
  });
});
