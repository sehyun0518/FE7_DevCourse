function removeDuplicateValues(obj) {
  const values = Object.values(obj);
  const duplicates = values.reduce((total, value, index) => {
    if (values.indexOf(value) !== index) total.push(value);
    return total;
  }, []);

  return Object.keys(obj).reduce((total, value) => {
    if (!duplicates.includes(obj[value]))
      total = { ...total, [value]: obj[value] };
    return total;
  }, {});
}

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }


function deepEqual(obj1, obj2){
    function d(obj1, obj2){
        // 객체 판단? 재귀
        Object.keys(obj1).forEach((value, _) => {
            if(obj1[value] !== obj2[value]) return false;
        })
    }
}