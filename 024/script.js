let phrases = [
  { text: 'отправить другу смешную гифку', image: 'https://i.pinimg.com/originals/ca/13/1d/ca131d27e5dc5c6013638bc53fad6371.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'https://img.icons8.com/bubbles/500/000000/paper-plane.png' },
  { text: 'расставить книги на полке по цвету', image: 'https://img.icons8.com/bubbles/500/000000/books.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'https://img.icons8.com/dusk/500/000000/get-cash.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://img.icons8.com/bubbles/500/000000/news.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://img.icons8.com/bubbles/500/000000/music-library.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://img.icons8.com/bubbles/500/000000/short.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://img.icons8.com/bubbles/500/000000/telegram-app.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 