const axios = require('axios')

axios.post('http://288b5f28.ngrok.io/leet', { leet: 'Hello'})
	.then( response => { console.log(response.data.leet) })
	.catch( err => { console.log(err) })

