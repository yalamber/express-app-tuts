const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/search', (req, res) => {
  let searchKeyword = req.query.search
  //let results = db.query(`SELECT * from table1 where title LIKE %${searchKeyword}%`)
  if(searchKeyword === 'hello') {
    return res.json({
      'title': 'hello'
    })
  }
  res.sendFile(path.join(__dirname, 'views/search.html'))
})

app.listen(8081, () => {
  console.log('server started on port 8081')
})