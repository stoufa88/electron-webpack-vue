// Vendor dependencies

require('bootstrap/dist/js/bootstrap.min.js')
require('bootstrap/scss/bootstrap.scss')
require('animate.css/animate.min.css')
require('font-awesome/css/font-awesome.css')

require('./stylesheets/main.scss')

var Vue = require('vue')
var VueResource = require('vue-resource')
var VueRouter = require('vue-router')
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.transition('fade', {
  enterClass: 'slideInRight',
  leaveClass: 'slideOutRight'
})

var App = Vue.extend({})

var router = new VueRouter()

router.map({
  '/movies': {
		name: 'movieList',
    component: require('./components/MovieList.vue'),
		subRoutes: {
			'/:id': {
				name: 'movieDetails',
				component: require('./components/MovieDetails.vue')
			}
		}
  }
})

router.redirect({
  '*': '/movies'
})

router.start(App, '#app')
