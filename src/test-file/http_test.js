const http = require('http')
const fs = require('fs')

const url_1 = 'http://www.duyiedu.com/'
const url_2 = 'http://yuanjin.tech:5005/api/movie'

function httpRequestTest () {
  const request = http.request(
    url_2,
    {
      method: 'GET'
    },
    (resp) => {
      console.log(resp.statusCode)
      console.log(resp.headers)
      resp.on('data', (chunk) => {
        console.log(JSON.parse(chunk.toString('utf-8')))
      })
    }
  )
  request.end()
}

function createServer () {
  const server = http.createServer(async (req, res) => {
    console.log('请求来了')

    if (req.url === '/api/getInfo') {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      const content = {
        name: '刘晋飞',
        age: 18,
        hobby: ['唱', '跳', 'rap', '篮球']
      }
      res.write(JSON.stringify(content))
      res.end()
      return
    }
    if (req.url === '/index.html') {
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      const content = await fs.promises.readFile('./index.html', { encoding: 'utf-8' })
      res.write(content)
      res.end()
      return
    }
    if (req.url === '/css/index.css') {
      res.setHeader('Content-Type', 'text/css')

      res.write('h1{color:#f40;}')
      res.end()
      return
    }
    if (req.url === '/script/index.js') {
      res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
      res.write(`
        setTimeout(()=>{
          fetch("http://localhost:9528/api/getInfo").then(head=>head.json()).then(res=>console.log(res))
        },2000)
      `)
      res.end()
    }
  })

  server.listen(9528)

  server.on('listening', () => {
    console.log('监听中，端口为：9528')
  })
}

// createServer()
// httpRequestTest()
