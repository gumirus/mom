const button = document.querySelector('button');
const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');

button.addEventListener('click', function () {
  output.innerHTML = 'Мама, я тебя люблю ❤️';
})
button.addEventListener('click', function () {
  output2.innerHTML = 'Еллада, я тебя люблю ❤️';
})

