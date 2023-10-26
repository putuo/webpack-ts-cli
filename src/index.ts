export interface Person {
  name: string;
  age: number;
}

type myPerson = Person;

export function greet(person: myPerson) {
  var a = new Promise((r) => {
    console.log("promise1");
  });
  var b = new Promise((r) => {
    console.log("promise2");
  });

  Promise.any([a, b]).then((...r) => console.log(r));

  var arrow = async () => {
    console.log("箭头函数和async成功");
  };
  arrow();
  [1].some((item) => {
    console.log("some方法可用");
  });

  function add(x: number, y: number) {
    return x + y + "11";
  }

  let x: unknown = 1;

  // Error: Property 'toFixed' does not exist on type 'unknown'.
  // x.toFixed(2);

  if (typeof x === "number") {
    // OK
    x.toFixed(2);
  }
}
