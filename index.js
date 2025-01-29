const button = document.querySelector('button');
const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');

button.addEventListener('click', function () {
  if (output) {
    output.innerHTML = 'Мама, я тебя люблю ❤️';
  }

  if (output2) {
    output2.innerHTML = 'Еллада, я тебя люблю ❤️';
  }

  setTimeout(function () {
    if (output) {
      window.location.href = 'greece.html';
    } else {
      window.location.href = 'index.html';
    }
  }, 3500);
});