const Docxtemplater = require('docxtemplater');
const Packer = require('docxtemplater').Packer;

// Шаблон документа
const template = '<table><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th></tr><#rows><tr><td>${row.col1}</td><td>${row.col2}</td><td>${row.col3}</td></tr></#rows></table>';

// Данные для таблицы
const data = {
  rows: [
    {col1: 'Row 1, Col 1', col2: 'Row 1, Col 2', col3: 'Row 1, Col 3'},
    {col1: 'Row 2, Col 1', col2: 'Row 2, Col 2', col3: 'Row 2, Col 3'},
    {col1: 'Row 3, Col 1', col2: 'Row 3, Col 2', col3: 'Row 3, Col 3'}
  ]
};

// Создаем экземпляр Docxtemplater
const doc = new Docxtemplater();

// Загружаем шаблон
doc.loadFromHtml(template);

// Регистрируем модуль таблиц
doc.attachModule(new Docxtemplater.TableModule());

// Применяем данные
doc.setData(data);

// Рендерим документ
doc.render();

// Получаем сгенерированный документ
const generatedDoc = doc.getZip().generate({type: 'nodebuffer'});

// Сохраняем документ в файл
fs.writeFileSync('output.docx', generatedDoc);
