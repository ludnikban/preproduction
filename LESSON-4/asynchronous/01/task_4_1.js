// 1. Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
// начиная от from и заканчивая to.
// Сделайте два варианта решения.

// Используя setInterval.

 function printNumbers1(from, to) {
   let sec = from;
   if (from > to) return;

    let timerSec = setInterval(function() {
    alert(sec);
    if (sec === to) {
      clearInterval(timerSec);
    }
    sec++;
  }, 1000);
}

printNumbers1(2, 7);
printNumbers1(7, 2);


//Используя рекурсивный setTimeout.

function printNumbers2(from, to) {
  let sec = from;
  if (from > to) return;

  setTimeout(function tick() {
  alert(sec);
  if (sec < to) setTimeout(tick, 1000);
  sec++;
  }, 1000);
}

printNumbers2(1, 5);
printNumbers2(5, 1);



