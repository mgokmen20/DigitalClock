const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');

function updateTime() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  timeElement.textContent = time;
}

function updateDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const weekday = currentDate.toLocaleDateString(undefined, { weekday: 'long' });

  dateElement.textContent = formattedDate;
  dayElement.textContent = weekday;
}

setInterval(updateTime, 1000); // Her saniyede saatı güncelle
setInterval(updateDate, 1000); // Her saniyede tarihi güncelle
