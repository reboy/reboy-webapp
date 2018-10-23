import Vue from 'vue'
import { Button, Toast, Icon , Tab , List, Field } from 'vant'
// import Vant from 'vant'
// 以下组件没有对应css文件，需独立引用，否则babel-plugin-component会报错
import Tabs from 'vant/lib/tabs'
import CheckboxGroup from 'vant/lib/checkbox-group'

const components = {
Tab,
Tabs,
List,
Field,
Button,
Toast,
Icon,
CheckboxGroup
}

Object.keys(components).forEach(key => {
Vue.use(components[key])
})

// Vue.use(Vant)

