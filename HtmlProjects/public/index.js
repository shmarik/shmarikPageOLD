const form = document.getElementById('input-form');
const outputDiv = document.getElementById('output');

const dates = [];

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Собираем данные из формы
  // const formData = new FormData(form);
  // const data = {
  //   name: formData.get('name'),
  //   kvant_name: formData.get('kvant_name'),
  //   year: formData.get('year'),
  //   group: formData.get('group'),
  //   module: formData.get('module'),
  //   doc_name: formData.get('doc_name'),
  //   head_1: formData.get('head_1'),
  //   head_2: formData.get('head_2'),
  //   head_3: formData.get('head_3'),
  //   head_4: formData.get('head_4'),
  //   head_5: formData.get('head_5'),
  //   date_1: formData.get('date_1'),
  //   date_2: formData.get('date_2'),
  //   date_3: formData.get('date_3'),
  //   date_4: formData.get('date_4'),
  //   date_5: formData.get('date_5'),
  // };

const formData = new FormData(form);
const data = [...formData.entries()].reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});



  try {
    // Отправляем запрос на сервер и получаем docx файл
    const response = await fetch('/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const blob = await response.blob();
    
    // Создаем ссылку на скачивание файла
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'generated.docx';
    link.click();
    
    outputDiv.textContent = '';
  } catch (error) {
    outputDiv.textContent = error.message;
  }
});







function isHoliday(date) {
  // 1, 2, 3, 4, 5, 6 и 8 января - Новогодние каникулы;
  // 7 января - Рождество Христово;
  // 23 февраля - День защитника Отечества;
  // 8 марта - Международный женский день;
  // 1 мая - Праздник Весны и Труда;
  // 9 мая - День Победы;
  // 12 июня - День России;
  // 4 ноября - День народного единства.

  // В 2023 году в соответствии с Постановлением Правительства РФ от 29 августа 2022 г. N 1505 
  // "О переносе выходных дней в 2023 году" перенесены следующие выходные дни:
  // ! с воскресенья 1 января на пятницу 24 февраля;
  // ! с субботы 8 января на понедельник 8 мая.

  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month === 2 && (day === 23 || day === 24)) return true; // 23 февраля
  if (month === 3 && day === 8) return true; // 8 марта 
  if (month === 5 && (day === 1 || day === 8 || day === 9)) return true; // Майские праздники
  if (month === 11 && (day === 4)) return true; // 4 ноября
  if (month === 6 && (day === 12)) return true; // 12 июня
  if (month === 1 && (day === 1 || 
                      day === 2 || 
                      day === 3 || 
                      day === 4 || 
                      day === 5 || 
                      day === 6 || 
                      day === 7 || 
                      day === 8 )) return true; // Новогодние праздники
                      
  return false;
}


function generateDates() {
  const startYear = document.getElementById("start-year").value;
  const endYear = document.getElementById("end-year").value;
  const startMonth = document.getElementById("start-month").value;
  const endMonth = document.getElementById("end-month").value;
  const startDate = document.getElementById("start-day").value;
  const hours = document.getElementById("hours").value;

  const daysOfWeek = [];
  const checkboxes = document.getElementsByName("days[]");

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      daysOfWeek.push(+checkbox.value);
    }
  }


  let currentDate = new Date(startYear, startMonth - 1, startDate);
  let daysCounter = 0;

  while (daysCounter < hours / 2) {
    if (daysOfWeek.includes(currentDate.getDay()) && !isHoliday(currentDate)) {
      dates.push(getFormattedDate(currentDate));
      daysCounter++;
    }
    currentDate.setDate(currentDate.getDate() + 1);

    if (currentDate.getFullYear() > endYear || (currentDate.getFullYear() == endYear && currentDate.getMonth() + 1 > endMonth)) {
      if (dates.length < 36) {
        const nextMonth = currentDate.getMonth() + 1;
        let nextDate = new Date(startYear, nextMonth, 1);
        while (dates.length < 36 && (nextDate.getFullYear() < endYear || (nextDate.getFullYear() == endYear && nextDate.getMonth() + 1 <= endMonth))) {
          if (daysOfWeek.includes(nextDate.getDay()) && !isHoliday(nextDate)) {
            dates.push(getFormattedDate(nextDate));
          }
          nextDate.setDate(nextDate.getDate() + 1);
        }
      }
      break;
    }
  }

  generateTable(dates);
  

  const inputFields = document.getElementById("input-fields");

  for (let i = 0; i <= 35; i++) {

    const inputDate = document.createElement("input");
    inputDate.type = "text";
    inputDate.name = "date_" +(i+1);
    inputDate.value = dates[i]

    const inputHead = document.createElement("input");
    inputHead.type = "text";
    inputHead.name = "head_" +(i+1);

    inputFields.appendChild(inputDate);
    inputFields.appendChild(inputHead);
    inputFields.appendChild(document.createElement("p"));
  }
}


function getDayOfWeek(date) {
  const daysOfWeek = [0,1,2,3,4,5,6];
  return daysOfWeek[date.getDay()];
}

function getFormattedDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}.${month}.${year}`;
}


function generateTable(dates) {
  // Get the dates
  // Group the dates by month
  const datesByMonth = {};
  for (const date of dates) {
    const month = date.substr(3, 2); // Extract month from date string
    if (!datesByMonth[month]) {
      datesByMonth[month] = [];
    }
    datesByMonth[month].push(date);
  }

  // Get the table element
  const table = document.getElementById("dates-table-body");

  // Create a header row with month names
  const headerRow = table.insertRow();
  headerRow.classList.add("header-row");
  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  for (let i = 0; i < monthNames.length; i++) {
    const cell = headerRow.insertCell();
    cell.innerHTML = monthNames[i];
  }

  // Create a row for each day
  const numRows = Math.max(...Object.values(datesByMonth).map(monthDates => monthDates.length)); // Get the number of rows needed
  count = 0;
  for (let row = 0; row < numRows; row++) {
    const tableRow = table.insertRow();
    for (let month = 1; month <= 12; month++) {
      const monthString = month.toString().padStart(2, "0");
      const cell = tableRow.insertCell();
      if (datesByMonth[monthString] && datesByMonth[monthString][row]) {
        cell.innerHTML = datesByMonth[monthString][row];
        count++;
      }
    }
  }

  tableRow = table.insertRow()
  const cell = tableRow.insertCell()
  cell.innerHTML = `<h2>Всего: ${count} занятий</h2>`
  cell.colSpan = 12

}

