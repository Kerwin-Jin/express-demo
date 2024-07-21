const fs = require('fs')
const path = require('path')
const { Readable, Writable } = require('stream')
const net = require('net')

const pathStr = path.resolve(__dirname)

function copyFile () {
  // fs.promises.stat(pathStr).then(res => {
  //   console.log(res.isDirectory())
  // })
  // fs.promises.readFile(pathStr).then(res => {
  //   fs.promises.writeFile(path.resolve(__dirname, './a.copy.js'), Buffer.from(res)).then(r => {
  //     console.log('copy success!')
  //   })
  // })
  fs.promises.readdir(pathStr).then((res) => {
    const f = res.map(async (item) => {
      const ps = path.resolve(__dirname, item)
      const result = await fs.promises.stat(ps)
      return {
        name: item,
        isDirectory: result.isDirectory(),
        isFile: result.isFile()
      }
    })
    console.log(f)
  })
}

function createWriteStream () {
  const ws = fs.createWriteStream(path.resolve(__dirname, './writeFile.txt'), { encoding: 'utf-8', autoClose: true, flags: 'w+', highWaterMark: 3 })
  for (let index = 0; index < 1024 * 10; index++) {
    ws.write('1')
  }
}

function copyFileByStream () {
  const fromPath = path.resolve(__dirname, './test_dir/tt.txt')
  const toPath = path.resolve(__dirname, './tta.txt')

  const rs = fs.createReadStream(fromPath)
  const ws = fs.createWriteStream(toPath)

  rs.pipe(ws)

  rs.on('end', () => {
    console.log('复制结束')
  })
}

function readFileByStream (fp) {
  return new Promise((resolve, reject) => {
    const filePath = path.resolve(__dirname, fp)
    const readableStream = fs.createReadStream(filePath, {
      encoding: 'utf-8',
      highWaterMark: 1,
      autoClose: true
    })

    readableStream.on('open', () => {
      console.log('文件被打开了')
    })

    readableStream.on('error', (e) => {
      reject(new Error(e))
    })

    readableStream.on('close', () => {
      console.log('文件关闭后调用 ')
    })

    let data = ''
    readableStream.on('data', (chunk) => {
      data += chunk
    })

    readableStream.on('end', () => {
      console.log('全部数据读取完毕')
      resolve(data)
    })
  })
}

// readFileByStream('../index.js').then((res) => {
//   console.log('%c Line:72 🍷 res', 'color:#2eafb0', res)
// })
