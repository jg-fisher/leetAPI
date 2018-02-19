const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')

const app = express()
app.use(cors())
app.use(json())

let leet = {
  A : '@',  B : '8',  C : '(',  D : 'D',  E : '3',  F : 'F',  G : '6',  H : '#',
  I : '!',  J : 'J',  K : 'K',  L : '1',  M : 'M',  N : 'N',  O : '0',  P : 'P',
  Q : 'Q',  R : 'R',  S : '$',  T : '7',  U : 'U',  V : 'V',  W : 'W',  X : 'X',
  Y : 'Y',  Z : '2'
}

let leet_speak = (s) => s.toString().toUpperCase().split('').map( l => leet[l] || l ).join('')

app.post('/leet', (req, res, next) => { 
	res.json({leet:leet_speak(req.body.leet)})
	console.log(req.body.leet)
})

const port = 3000
app.listen(port, () => { console.log('Listening on port: ' + port) })

