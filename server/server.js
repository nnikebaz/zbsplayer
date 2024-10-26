const express = require('express');
const mysql = require('mysql2')
const cors = require('cors');
const multer = require('multer');

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

//Настройка загрузчика Multer

const storage = multer.diskStorage({
  destination: (cb) => {
    cb(null, 'uploads/'); // Папка для загружаемых файлов
  },
  filename: (file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage})

//Настройка подключения к My SQL

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Nikita',
  password: '0745',
  database: 'my_app',
  port: '3306'
})

//Проверка подключения к базе

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к MySQL: ', err);
    return
  }
  console.log('Подключение к MySQL установлено')
})

//Эндпоинт для получения треков

app.get('/tracks', (req, res) => {
  db.query('SELECT * FROM tracks', (err, results) => {
    if (err) {
      return res.status(500).json(err)
    }
    res.json(results)
  })
})

//Эндпоинт для добавления треков

app.post('/tracks', upload.single('file'), (req, res) => {
  const { name, img} = req.body;
  const filePath = req.file.path // Путь к загруженному файлу

  const sql = 'INSERT INTO tracks (name, img, link) VALUES (?,?,?)'
  db.query(sql, [name, img, filePath], (err, result) => {
    if (err) {
      return res.status(500).json(err)
    }
    res.status(201).json({id: result.insertId})
  })
})

//Запуск сервера

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost: ${PORT}`)
})