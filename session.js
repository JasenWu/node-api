var cookieSession = require('cookie-session')
var express = require('express')
 
var app = express()
 
app.set('trust proxy', 1) // trust first proxy
 
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
 
app.use(function (req, res, next) {
  var n = req.session.views || 0
  req.session.views = n++
  res.end(n + ' views')
})
 
app.listen(3000)