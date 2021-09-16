//global scope and this
this.name = "Global";
console.log(this);

function test() {
  (() => {
    console.log(this);
  })();
}
test();

// lexical scope
const add = (a) => {
  return (b) => a + b;
};

const result = add(1)(2);
console.log(result);

// Array Destructuring
const ages = [12, 17, 8, 21, 14, 11];

const ["carter, john"] = ages;

// Destructure right on a literal
const [carter, john] = [12, 17, 8, 21, 14, 11];
