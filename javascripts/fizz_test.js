(function() {

  $().ready(function() {
    module("Fizzbuzzbizz generátor");
    test("1==1", function() {
      return equal(fizz(1), 1);
    });
    test("2==2", function() {
      return equal(fizz(2), 2);
    });
    test("3==fizz", function() {
      return equal(fizz(3), "fizz");
    });
      test("4==4", function() {
      return equal(fizz(4), 4);
    });
         test("15==fizzbuzz", function() {
      return equal(fizz(15), "fizzbuzz");
    });
    return test("5==buzz", function() {
      return equal(fizz(5), "buzz");
    });
  });

}).call(this);