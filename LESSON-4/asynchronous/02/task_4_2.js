// 2. Напишите часы с использованием setInterval (с выводом в консоль),
// при каждом новом выводе (каждую секунду) очищать сонсоль (console.clear)

function clock() {
  let timerSec = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
  }, 1000);

  setTimeout(() => {
    clearInterval(timerSec);
    console.log('stop');
  }, 9000);
}

clock();
