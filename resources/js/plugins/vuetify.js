import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
import '@mdi/font/css/materialdesignicons.css';

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#8BD886',
                // secondary: '#9FE3B4',
                accent: '#F1F1F1',
                error: '#D24545',
                warning: '#FBBE66',

            }
        }
    },
    icons: {
        iconfont: 'mdi',
    },
    
}

export default new Vuetify(opts)