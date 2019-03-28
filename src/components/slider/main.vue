<template>
  <div class="vue-slider" role="slider" :aria-valuemin="min" :aria-valuemax="max">
    <div class="slider-runway" @click="onSliderClick" ref="slider">
      <div class="slider-bar" :style="barStyle"></div>
      <slider-button v-model="firstValue" ref="button1"/>
    </div>
  </div>
</template>

<script>
import SliderButton from './button.vue';

export default {
  name: 'VueSlider',
  props: {
    min: {
      type: Number,
      default: 0,
    },
    formatTooltip: Function,
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 0.1,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  components: {
    SliderButton,
  },
  data() {
    return {
      firstValue: null,
      secondValue: null,
      oldValue: null,
      sliderSize: 1,
    };
  },
  watch: {
    value(val) {
      this.firstValue = Math.min(this.max, Math.max(this.min, val));
      this.oldValue = this.firstValue;
    },
  },
  methods: {
    setPosition(percent) {
      this.$refs.button1.setPosition(percent);
    },
    onSliderClick(event) {
      this.resetSize();
      const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
      this.setPosition((event.clientX - sliderOffsetLeft) / this.sliderSize * 100);
      this.emitChange();
    },
    emitChange() {
      this.$nextTick(() => {
        this.$emit('change', this.firstValue);
      });
    },
    resetSize() {
      if (this.$refs.slider) {
        this.sliderSize = this.$refs.slider[`client${'Width'}`];
      }
    },
  },
  computed: {
    stops() {
      if (this.min > this.max) return [];
      if (this.step === 0) {
        if (process.env.NODE_ENV === 'production') {
          return [];
        }
      }
      const stopCount = (this.max - this.min) / this.step;
      const stepWidth = 100 * this.step / (this.max - this.min);
      const result = [];
      for (let i = 1; i < stopCount; i++) {
        result.push(i * stepWidth);
      }
      return result.filter(step => step
          > 100
          * (this.firstValue - this.min)
          / (this.max - this.min));
    },
    barSize() {
      return `${100 * (this.firstValue - this.min) / (this.max - this.min)}%`;
    },
    barStart() {
      return '0%';
    },
    barStyle() {
      return {
        width: this.barSize,
        left: this.barStart,
      };
    },
  },
  mounted() {
    this.firstValue = Math.min(this.max, Math.max(this.min, this.value));
    this.oldValue = this.firstValue;
  },
};
</script>
<style lang="scss" scoped>
  $slider-bar-color: #FF674D;
  .vue-slider {
    .slider-runway {
      width: 100%;
      height: 4px;
      margin: 14px 0;
      background-color: #E4E7ED;
      border-radius: 2px;
      position: relative;
      cursor: pointer;
      vertical-align: middle;
      .slider-bar {
        height: 4px;
        background-color: $slider-bar-color;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        position: absolute;
      }
    }
  }
</style>
