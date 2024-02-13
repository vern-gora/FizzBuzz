// function fizzbuzz(n) {

//     const array = [];

//     for (let i = 1; i <= n; i++) {

//         if (/*i % 15 === 0*/ i % 3 === 0 && i % 5 === 0) {
//             array.push("fizzbuzz");
//         } else if (i % 3 === 0) {
//             array.push("fizz");
//         } else if (i % 5 === 0) {
//             array.push("buzz");
//         } else {
//             array.push(i.toString())
//         }
//     }
//     return array;
// }

// console.log(fizzbuzz(32))

// -------------------------------------------------------------------------------------------

// const array = [];

// for (var i = 1; i <= 32; i++) {
//   switch (true) {
//     case i % 3 === 0 && i % 5 === 0:
//       array.push("fizzbuzz");
//       break;
//     case i % 3 === 0:
//       array.push("fizz");
//       break;
//     case i % 5 === 0:
//       array.push("buzz");
//       break;
//     default:
//       array.push(i.toString());
//       break;
//   }
// }

// console.log(array);

// -------------------------------------------------------------------------------------------

// const array = [];

// let i = 0;

// while (i < 32) {
//   i++;

//   if (i % 3 === 0 && i % 5 === 0) {
//     array.push("fizzbuzz");
//   } else if (i % 3 === 0) {
//     array.push("fizz");
//   } else if (i % 5 === 0) {
//     array.push("buzz");
//   } else {
//     array.push(i.toString());
//   }
// }

// console.log(array);

// -------------------------------------------------------------------------------------------

// const array = [];

// function fizzbuzz(n) {
//     if (n % 3 === 0 && n % 5 === 0) {
//         return 1;
//     }
//     return 0;
// }

// function fizz(n) {
//     if (n % 3 === 0) {
//         return 1;
//     }
//     return 0;
// }

// function buzz(n) {
//     if (n % 5 === 0) {
//         return 1;
//     }
//     return 0;
// }

// for (let i = 1; i <= 32; i++) {
//     if (fizzbuzz(i)) {
//         array.push("fizzbuzz");
//       } else if (fizz(i)) {
//         array.push("fizz");
//       } else if (buzz(i)) {
//         array.push("buzz");
//       } else {
//         array.push(i.toString());
//       }
// }

// console.log(array)

// -------------------------------------------------------------------------------------------

const n = 32;

class Tag {
  constructor(_value) {
    this.value = _value;
  }
}

class DivCondition {
  constructor(_divider) {
    this.divider = _divider;
  }

  isTruthy(num) {
    return num % this.divider === 0;
  }
}

class AndStrategy {
  constructor(_conditionsOrStrategies) {
    this.conditions = _conditionsOrStrategies;
  }

  isTruthy(num) {
    return this.conditions.every((condition) => condition.isTruthy(num));
  }
}

class TagNumRule {
  constructor(_tag, _strategy) {
    this.strategy = _strategy;
    this.tag = _tag;
  }

  isSuccess(num) {
    return this.strategy.isTruthy(num);
  }
}

class TagNumRulesCollection {
  constructor(_tags) {
    this.tags = _tags;
  }

  find(num, defaultValue) {
    const matchingTagRule = this.tags.find((tagRule) => tagRule.isSuccess(num));
    return matchingTagRule ? matchingTagRule.tag : defaultValue;
  }
}

class Printer {
  constructor(_context) {
    this.context = _context;
  }

  print() {
    console.log(this.context.value);
  }
}

const numTags = new TagNumRulesCollection([
  new TagNumRule(
    new Tag("fizzbuzz"),
    new AndStrategy([new DivCondition(3), new DivCondition(5)])
  ),
  new TagNumRule(new Tag("fizz"), new AndStrategy([new DivCondition(3)])),
  new TagNumRule(new Tag("buzz"), new AndStrategy([new DivCondition(5)])),
]);

for (let i = 1; i <= n; i++) {
  new Printer(numTags.find(i, new Tag(i))).print();
}

// -------------------------------------------------------------------------------------------
