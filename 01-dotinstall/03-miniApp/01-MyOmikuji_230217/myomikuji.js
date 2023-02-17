'use strict';

{
  const btn = document.getElementById('btn'); 
  const result = document.getElementById('result')
  btn.addEventListener('click', () => {
    const results = ['EXCELLENT!!','GOOD!','BAD']
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];
    // switch (n) {
    //   case 0:
    //   result.textContent = 'EXCELLENT!!';
    //   break;
    //   case 1:
    //   result.textContent = 'GOOD!';
    //   break;
    //   case 2:
    //   result.textContent = 'BAD';
    //   break;
    // }
  })
}