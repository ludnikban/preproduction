const express = require('express');
const app = express();
const path = require('path')
const fs = require("fs")

const zipdir = require("./zipDirectory")
const port = 3000;

const dirImg = path.join(__dirname, 'image')
const zipFileName = path.join(__dirname, 'image.zip')

zipdir(dirImg, zipFileName)

app.get('/', function (_, res) {
  res.set('Content-Type', 'application/zip');
  res.set('Content-Disposition', 'attachment; filename=image.zip');

  fs.access(dirImg, fs.constants.R_OK, err => {
    if (err) {
      res.statusCode = 404;
      res.end("Ресурс не найден!");
    } else {

      const rs = fs.createReadStream(zipFileName).pipe(res);

      rs.on('error', error => {
        res.statusCode = 500
        res.end('Server Error')
        console.log(error)
      })
      res.on('close', () => {
        rs.destroy()
        console.log(`Сервер закончил прослушивание запросов на порту ${port}`);
      })
      fs.stat(zipFileName, function (err, stats) {
        if (err) {
          throw err
        }
        console.log(`Архив папки с изображениями размером ${stats.size} успешно отправлен`);
      })
    }
  })
})
app.listen(port, () => {
  console.log(`Сервер начал прослушивание запросов на порту ${port}`);
});

