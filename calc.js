// sum, sub, mult, div
// node calc.js sum 3 4 7 19 = 33

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((el) => Number(el));

const calculate = (op, numArray) => {
  let result = null;

  switch (op) {
    case "sum":
      result = numArray.reduce((acc, el) => acc + el);
      break;

    case "sub":
      result = numArray.reduce((acc, el) => acc - el);
      break;

    case "mult":
      result = numArray.reduce((acc, el) => acc * el);
      break;

    case "div":
      result = numArray.reduce((acc, el) => acc / el);
      break;

    default:
      result = "Unknown operation type";
      break;
  }

  return result;
};

console.log(calculate(operator, numbers));
