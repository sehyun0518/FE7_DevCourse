// 01
function filterByThreshold(obj, threshold) {
  return Object.keys(obj).reduce((total, value) => {
    if (obj[value] >= threshold)
      return (total = { ...total, [value]: obj[value] });
  }, {});
}

// 02
function squareValues(obj) {
  return Object.keys(obj).reduce(
    (total, value) => (total = { ...total, [value]: obj[value] ** 2 }),
    {}
  );
}

// 03
function renameKey(obj, n, to) {
  if (Object.hasOwn(obj, n)) {
    let temp = obj[n];
    delete obj[n];
    obj[to] = temp;
  }
  return obj;
}

// 04
function sortKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((total, value) => (total = { ...total, [value]: obj[value] }), {});
}

// 05
function mapValues(obj, action) {
  return Object.keys(obj).reduce((total, value) => {
    return (total = { ...total, [value]: action(obj[value]) });
  }, {});
}

// 06
function invert(obj) {
  return Object.keys(obj).reduce(
    (total, value) => (total = { ...total, [obj[value]]: value }),
    {}
  );
}

// 07

function getByPath(obj, path){
    let pathArr = path.split(".")
    for(const p of pathArr){
        obj = obj[p]
    }
    return obj;
}
const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c"));     // 42


function setByPath(obj, path, value){
    let pathArr = path.split(".")
    for(const p of pathArr){
        obj[p] = {};
        obj = obj[p];
    }
    return obj;
}

const obj1 = {};
setByPath(obj1, "a.b.c", 100);
console.log(obj1); // { a: { b: { c: 100 } } }