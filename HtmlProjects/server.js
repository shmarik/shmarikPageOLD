const express = require("express");
const bodyParser = require("body-parser");
const JSZip = require("jszip");
const cors = require("cors");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");

const app = express();

// настройка middleware для обработки данных формы
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from the public directory
app.use(express.static("public"));

// // обработчик GET запроса на получение главной страницы
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// обработчик POST запроса на генерацию документа
app.post("/generate", (req, res) => {
  // загрузка содержимого файла шаблона
  const templatePath = path.join(__dirname, "template.docx");
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(templatePath);
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  const templateContent = fs.readFileSync(templatePath, "binary");

  // создание объекта Docxtemplater
  const doc = new Docxtemplater();
  doc.loadZip(new JSZip(templateContent));

  // получение данных из формы и передача их в шаблон
  // const data = {
  //   name: req.body.name,
  //   kvant_name: req.body.kvant_name,
  //   year: req.body.year,
  //   group: req.body.group,
  //   module: req.body.module,
  //   doc_name: req.body.doc_name,
  //   head_1: req.body.head_1,
  //   head_2: req.body.head_2,
  //   head_3: req.body.head_3,
  //   head_4: req.body.head_4,
  //   head_5: req.body.head_5,
  //   date_1: req.body.date_1,
  //   date_2: req.body.date_2,
  //   date_3: req.body.date_3,
  //   date_4: req.body.date_4,
  //   date_5: req.body.date_5,
  // };

  const { name, kvant_name, year, group, module, doc_name, ...dates } = req.body;

const data = {
  name,
  kvant_name,
  year,
  group,
  module,
  doc_name,
  ...dates
};


  console.log(data);

  doc.setData(data);

  // генерация нового документа на основе шаблона и данных
  try {
    doc.render();
  } catch (error) {
    res.status(500).send("Ошибка при генерации документа: " + error);
    return;
  }

  // получение содержимого сгенерированного документа
  const generatedContent = doc.getZip().generate({ type: "nodebuffer" });

  // отправка сгенерированного документа в виде вложения
  res.set("Content-Disposition", "attachment; filename=generated.docx");
  res.set("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  res.send(generatedContent);
});

// запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
