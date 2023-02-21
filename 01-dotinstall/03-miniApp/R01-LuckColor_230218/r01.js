'use strict';

{
const date = document.getElementById('date');
  function showDay() {
    let now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate()
    let year = now.getFullYear();
    return `${day} / ${month} / ${year}`;
  }
  // console.log(`${day} / ${month}`);
  date.innerHTML = showDay();
  
  const btn = document.getElementById('btn');
  const color = document.getElementById('color');
  btn.addEventListener('click', () => {
    const results = ['PINK','RED','BLUE','BLUCK','WHITE','GREEN','YELLOW','GRAY','GOLD','SILVER','PURPLE']
    const n = Math.floor(Math.random() * results.length);
    color.textContent = results[n];
  })
}