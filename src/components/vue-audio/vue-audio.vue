<template>
	<div class="audio-content" :style="audioStyle">
		<audio ref="vueAudio" @timeupdate="updateProgress" @ended="audioEnded" @canplay="audioLoad">
			<source :src="source.url" type="audio/mpeg">
			Your browser does not support the audio element.
		</audio>
		<!-- play button -->
		<aside class="play-button" @click="playEvent">
			<span class="button-icon" :data-status="playStatus"/>
		</aside>
		<!-- Section -->
		<div class="audio-section">
			<!-- file name -->
			<strong class="audio-file-name">{{ source.name }}</strong>
			<!-- slider -->
			<div class="audio-slider">
				<vue-slider :max="audioMaxTime" :value="audioTimeValue" @change="palyTimeChangeHandle"/>
			</div>
		</div>
		<!-- aside Menu -->
		<aside class="audio-aside">
			<!-- option -->
			<div class="flex-space-between audio-aside-option">
				<slot name="option1"></slot>
				<slot name="option2"></slot>
			</div>
			<!-- play time -->
			<p class="audio-play-time">{{currentTime}}/{{totalTime}}</p>
		</aside>
	</div>
</template>
<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { cloneDeep } from 'lodash';
import VueSlider from '../slider/main.vue';

interface Source {
	name: string,
	url: string
}

@Component({
  components: {
	  VueSlider,
  },
})

export default class vueAudio extends Vue {
  name: string = 'vue-audio'

	private source: Source = {
	  name: '',
	  url: '',
	}

	private playStatus: string = 'stop'

	private audioMaxTime: number = 100

	private audioTimeValue: number = 0

	private totalTime: string = '00:00'

	private currentTime: string = '00:00'

	@Prop({
	  required: true,
	  default: {},
	}) private value!: object

	@Prop({
	  required: false,
	  default: () => {},
	}) private audioStyle?: object

	/**
	 * playEvent
	 */
	public playEvent(event: object) {
	  if ((this as any).$refs.vueAudio.paused) {
	    (this as any).audioPlay();
	  } else {
	    (this as any).audioPause();
	  }
	}

	/**
	 * audioPause
	 */
	public audioPause() {
	  (this as any).playStatus = 'stop';
	  (this as any).$refs.vueAudio.pause();
	}

	/**
	 * audioPlay
	 */
	public audioPlay() {
	  (this as any).playStatus = 'play';
	  (this as any).$refs.vueAudio.play();
	}

	/**
	 * audioLoad
	 */
	public audioLoad(event) {
	  this.totalTime = this.transTime((this as any).$refs.vueAudio.duration);
	  this.currentTime = this.transTime((this as any).$refs.vueAudio.currentTime);
	  this.audioMaxTime = (this as any).$refs.vueAudio.duration;
	}

	/**
	 * palyTimeChangeHandle
	 */
	public palyTimeChangeHandle(val) {
	  (this as any).$refs.vueAudio.currentTime = val + (this.audioMaxTime % 1);
	}

	/**
	 * updateProgress
	 */
	public updateProgress(event) {
	  this.currentTime = this.transTime((this as any).$refs.vueAudio.currentTime);
	  this.audioTimeValue = (this as any).$refs.vueAudio.currentTime;
	}

	/**
	 * transTime
	 */
	public transTime(time: number): string {
	  const Minute = parseInt(String(Math.floor(time) / 60), 10);
	  const Second = Math.floor(time) % 60;
	  return `${Minute <= 9 ? `0${Minute}` : Minute}:${Second <= 9 ? `0${Second}` : Second}`;
	}

	/**
	 * audioEnded
	 */
	public audioEnded(event) {
	  (this as any).audioPause();
	}

	@Watch('value', { immediate: true, deep: true })
	onSrcChange(newVal: object, oldVal: object) {
	  (this as any).source = cloneDeep(newVal);
	}
}
</script>
<style lang="scss" scoped>
$audio-width: 320px;
$audio-height: 76px;
$button-width: 66px;
$button-height: $audio-height;
$audio-aside-width: 70px;
$audio-aside-height: $audio-height;
$button-background: #FFEFED;
$button-icon-color: #FF674D;
$audio-aside-option-color: $button-icon-color;
$audio-section-background: #fff;
$audio-section-margin: 20px;
$audio-section-width: $audio-width - $button-width - $audio-aside-width - $audio-section-margin;
$button-size: 15px;
$font-size: 14px;
.audio-content {
	width: $audio-width;
	height: $audio-height;
	box-shadow: 0 0 8px 0 #ddd;
	border-radius: 5px;
	overflow: hidden;
	// display: flex;
	.play-button {
		float: left;
		width: $button-width;
		height: $button-height;
		background-color: $button-background;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		.button-icon {
			transition: all .3s;
			&[data-status="stop"] {
				width: 0;
				height: 0;
				display: inline-block;
				border-top: $button-size solid transparent;
				border-left: $button-size solid $button-icon-color;
				border-bottom: $button-size solid transparent;
				transition-duration: .3s;
			}
			&[data-status="play"] {
				width: 5px;
				border-left: 5px solid $button-icon-color;
				border-right: 5px solid $button-icon-color;
				height: 25px;
				transition-duration: .3s;
			}
		}
	}
	.audio-section {
		float: left;
		// width: $audio-section-width;
		width: calc(100% - 66px - 90px);
		height: 100%;
		background-color: $audio-section-background;
		padding: $audio-section-margin;
		box-sizing: border-box;
		font-size: $font-size;
		.audio-file-name {
			width: 100%;
			display: inline-block;
			word-wrap: keep-all;
			white-space:nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
		}
		.audio-slider {
			margin-top: 10px;
		}
	}
	.audio-aside {
		@extend .audio-section;
		width: $audio-aside-width + $audio-section-margin;
		padding: $audio-section-margin $audio-section-margin $audio-section-margin 0;
		.audio-play-time {
			margin-top: 10px;
			text-align: center;
		}
		.audio-aside-option {
			color: $audio-aside-option-color;
			span {
				cursor: pointer;
			}
		}
	}
}
.flex-space-between {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
</style>
