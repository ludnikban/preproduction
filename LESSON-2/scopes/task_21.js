var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

fun1();
fun2();

function fun2() {
  var output = "";
  if (typeof myGlobal !== "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal !== "undefined") {
    output += " oopGlobal: " + oopsGlobal;
  }
  console.log(output);
}
