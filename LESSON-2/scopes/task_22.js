function myLocalScore() {
  'use strict';
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScore();
console.log('inside myLocalScope', myVar);
