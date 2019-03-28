# vue-audio

## Install
```shell
npm install element-ui -S
```

## Quick Start
``` javascript
import VueAudio from 'vue-audio'

Vue.use(VueAudio)

// or
import VueAudio from 'vue-audio'

export default {
    components: {
        VueAudio
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