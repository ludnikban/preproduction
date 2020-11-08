const path = require('path')
const fs = require("fs")
const http = require("http")
const zipdir = require("./zipDirectory")

const dirImg = path.join(__dirname, 'image')
const zipFile = path.join(__dirname, 'image.zip')

zipdir(dirImg, zipFile)                              //архивирование папки image

http.createServer(function (_, res) {

  fs.access(dirImg, fs.constants.R_OK, err => {
    if (err) {
      res.statusCode = 404;
      res.end("Ресурс не найден!");
    } else {

      const rs = fs.createReadStream(zipFile).pipe(res);

      rs.on('error', error => {
        res.statusCode = 500
        res.end('Server Error')
        console.log(error)
      })
      res.on('close', () => {
        rs.destroy()
      })

      fs.stat(zipFile, function(err, stats){
        if (err) {
          throw err
        }
        console.log(`Архив папки с изображениями размером ${stats.size} успешно отправлен`);
      })
    }
  })
}).listen(3000, () => {
  console.log("Сервер начал прослушивание запросов на порту 3000");
})
