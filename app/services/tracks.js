const URL	=	'https://api.soundcloud.com/tracks?client_id=XXX'

export default class DataService {
  getTracks (context) {
		return context.$http({url: URL, method: 'GET' }).then(function (response) {
			return response.data
		})
  }
}
