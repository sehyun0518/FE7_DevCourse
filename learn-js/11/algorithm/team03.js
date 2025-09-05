function box(arr) {
  let count = 0;
  let result = 0;
  for (const item of arr) {
    count += item;
    if (count > 10) {
      result += 1;
      count -= 10;
    }
  }
  console.log(`총 ${count !== 0 ? result + 1 : result}박스가 필요합니다.`);
}

function fishingResult(fishs) {
  let obj = {};
  for (const fish of fishs) {
    if (!Object.hasOwn(obj, fish)) {
      obj[fish] = 0;
    }
    obj[fish] += 1;
  }
  return obj;
}

console.log(fishingResult(['광어', '고등어', '광어', '광어', '우럭', '광어', '광어']));