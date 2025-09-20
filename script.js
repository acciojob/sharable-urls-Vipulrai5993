const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const button = document.getElementById('button');
const urlText = document.getElementById('url');

button.addEventListener('click', () => {
  const name = encodeURIComponent(nameInput.value.trim());
  const year = encodeURIComponent(yearInput.value.trim());

  
  let query = '';
  if (name) query += `name=${name}`;
  if (year) query += (query ? '&' : '') + `year=${year}`;

  urlText.textContent = query 
    ? `https://localhost:8080/?${query}`
    : `https://localhost:8080/`;
});