// Vendor dependencies

require('bootstrap/dist/js/bootstrap.min.js')
require('./stylesheets/main.scss')

var Vue = require('vue')
var VueResource = require('vue-resource')
var VueRouter = require('vue-router')
Vue.use(VueResource)
Vue.use(VueRouter)

var App = Vue.extend({})

var router = new VueRouter()

router.map({
  '/tracks': {
		name: 'tracks',
    component: require('./components/TrackList.vue'),
  }
})

router.redirect({
  '*': '/tracks'
})

router.start(App, '#app')
