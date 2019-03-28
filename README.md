# vue-audio-play

## Demo
```html
<vue-audio-play :value="value" :audioStyle="costomeStyle">
    <!-- Slot -->
</vue-audio-play>
```

## Install
```shell
npm install vue-audio-play -S

# or
yarn add vue-audio-play
```

## Quick Start
``` javascript
import VueAudioPlay from 'vue-audio-play'

import 'vue-audio-play/dist/vue-audio-play.css';

Vue.use(VueAudioPlay)

// or
import VueAudioPlay from 'vue-audio-play'

import 'vue-audio-play/dist/vue-audio-play.css';

export default {
    components: {
        VueAudioPlay
    }
}
```
## Slot （Optional）
```html
<span slot="option1">Edit</span> 
<span slot="option2">Delete</span> 
```

## Params
<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Explain</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>value</td>
            <td>source url and file name</td>
            <td>Object</td>
            <td>Yes</td>
            <td>-</td>
        </tr>
        <tr>
            <td>audioStyle</td>
            <td>audio container style</td>
            <td>Object</td>
            <td>No</td>
            <td>{ width: '320px' }</td>
        </tr>
    </tbody>
</table>

## LICENSE
[MIT](LICENSE)
