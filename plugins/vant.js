 import Vue from 'vue'
 import { NavBar,Tab,Field,Icon,Toast,Dialog,NoticeBar } from 'vant'

// // import Vant from 'vant'
// // 以下组件没有对应css文件，需独立引用，否则babel-plugin-component会报错
 import Tabs from 'vant/lib/tabs'
// // import CheckboxGroup from 'vant/lib/checkbox-group'
// import SwipeItem from 'vant/lib/swipe-item'
 const components = {
//     NavBar, Swipe, SwipeItem
 
NavBar,
 Tab,
 Tabs,
 Field,
 Icon,
 Toast,
 Dialog,
 NoticeBar
// // List,
// // Field,
// // Button,
// // Toast,
// // Icon,
// // CheckboxGroup,
// // Popup
 }

Object.keys(components).forEach(key => {
Vue.use(components[key])
})

// Vue.use(Vant)

