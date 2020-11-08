const path = require('path')
const fs = require("fs")
const http = require("http")
const url = require('url')
const zipdir = require("./zipDirectory")

const dirImg = path.join(__dirname, 'image')
const zipFile = path.join(__dirname, 'image.zip')
const port = 3000;

zipdir(dirImg, zipFile)                              //архивирование папки image

http.createServer(function (req, res) {

  let urlParts = url.parse(req.url)

  fs.access(dirImg, fs.constants.R_OK, err => {
    if (err) {
      res.statusCode = 404;
      res.end("Ресурс не найден!");
    } else {
      if (req.method == 'GET') {
        switch (urlParts.pathname) {
          case "/":
            homepage(req, res)
            break
          case "/download":
            download(req, res)
            break
          default:
            page404(req, res)
            break
        }
      }
    }
  })
}).listen(port, () => {
  console.log(`Сервер начал прослушивание запросов на порту ${port}`)
})

function download(req, res) {

  const rs = fs.createReadStream(zipFile).pipe(res);

  rs.on('error', error => {
    res.statusCode = 500
    res.end('Server Error')
    console.log(error)
  })

  res.on('close', () => {
    rs.destroy()
  })

  fs.stat(zipFile, function (err, stats) {
    if (err) {
      throw err
    }
    console.log(`Архив папки с изображениями размером ${stats.size} успешно отправлен`)
  })
}

function homepage(req, res) {
  res.end('homepage')
}

function page404(req, res) {
  res.end('404')
}

