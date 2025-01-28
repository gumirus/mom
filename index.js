const button = document.querySelector('button');
const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');

button.addEventListener('click', function () {
  output.innerHTML = 'Мама, я тебя люблю ❤️';

  setTimeout(function () {
    window.location.href = 'greece.html';
  }, 3500);
});

button.addEventListener('click', function () {
  output2.innerHTML = 'Еллада, я тебя люблю ❤️';

  setTimeout(function () {
    window.location.href = 'index.html';
  }, 3500);
});
