var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library3.js');
describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).to.be.equal('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).to.be.equal('Buzz');
  });

  it("should return `myApp.fizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it("should return `myApp.fizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).to.be.equal('FizzBuzz');
  });

  it("should return `myApp.fizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).to.be.equal('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).to.be.equal('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).to.be.equal(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).to.be.equal(101);
  });
});