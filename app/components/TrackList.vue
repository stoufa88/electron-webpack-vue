<template>
	<div class="container" v-if="tracks.length">
	  <div class="card-deck">
	    <div class="card" v-for="track in tracks">
	      <img class="card-img-top" v-bind:src="track.artwork_url" alt="Card image cap">
	      <div class="card-block">
	        <h6 class="card-title">{{track.title}}</h6>
	        <p class="card-description">{{track.artist}}</p>
	      </div>
	    </div>
	  </div>
	</div>

	<loading v-if="!tracks.length"></loading>
</template>

<script>
import DataService from '../services/tracks';
let service = new DataService();

export default {
	components: {
		loading: require('./Loading.vue')
	},
	data () {
		return {
			tracks: []
		}
	},
	ready: function() {
		const self = this

		service.getTracks(self).then(function(data) {
			data = data.filter(track => track.artwork_url)
			self.$set('tracks', data)
		});
  }
}
</script>
