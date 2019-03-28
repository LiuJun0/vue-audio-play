# vue-audio-play

## Install
```shell
npm install vue-audio-play -S
```

## Quick Start
``` javascript
import VueAudioPlay from 'vue-audio-play'

Vue.use(VueAudioPlay)

// or
import VueAudioPlay from 'vue-audio-play'

export default {
    components: {
        VueAudioPlay
    }
}
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
