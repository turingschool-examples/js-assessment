[![Build Status](https://travis-ci.org/rmurphey/js-assessment.svg?branch=master)](https://travis-ci.org/rmurphey/js-assessment)

# A test-driven JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a JavaScript position, or to evaluate and improve one's own
skills.

## Installation Instructions
1. Clone the repository:
```
git clone git@github.com:turingschool-examples/js-assessment.git
or
git clone https://github.com/turingschool-examples/js-assessment.git
```
2. `cd` into the cloned repo
```
cd js-assessment
```
3. Install dependencies
```
npm i 
```
4. Run tests
```
npm test
```

## Running Tests

While there are numerous tests in this repo, the main focus for today will be on implementing the functionality behind array prototype methods without using array prototype methods.

Tests exist in `./tests/app/arrays.js` while the implementation file exists in `./app/arrays.js`.

Due to the `.only` existing on the `describe` block of the arrays test, only the tests for arrays will run.

Reminder, there is no use of array prototype methods including `push`, `pop`, `includes`, etc.  The only time that you can use a prototype method is `removeWithoutCopy`, where you are allowed to use `.splice()`.  You are allowed to use `for` loops as well as the spread operator.

### Available dependencies

The repo includes jQuery, Backbone, and Underscore. You can use these
libraries when writing your solutions!

## I want to see the answers!

First, bear in mind that looking up the answers is going to teach you a whole
lot less than you'll learn by working on the tests, even if you occasionally get
stuck. I'd recommend only looking at the answers once you have the tests
passing, to see if there's another way you could have approached the
problem.

A solution exists on the `array-solutions` branch.

# License

Copyright &copy; 2012-2016 Rebecca Murphey with many thanks to several
[contributors](https://github.com/rmurphey/js-assessment/graphs/contributors).

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
