function countPaths(home, park) {
  right = park[0] - home[0];
  up = park[1] - home[1];
  return factorial(right + up) / (factorial(right) * factorial(up));
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function checkPrimeOdd() {
  let result = [];

  // 소수 판별 함수
  function is_prime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 실제 odd prime 검색 함수
  return function checkOdd(num) {
    result = []; // 호출할 때마다 result 초기화
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 1 && is_prime(i)) {
        result.push(i);
      }
    }
    return result;
  };
}

function solution() {
  return checkPrimeOdd();
}

const primeOdd = solution();

function checkout(prices, freeThreshold, shippingFee) {
  let min = prices[0];
  let sum = 0;

  for (const price of prices) {
    sum += price;
    if (min > price) min = price;
  }

  if (prices.length >= 3) sum -= min;

  return sum >= freeThreshold
    ? [sum, 0, sum]
    : [sum, shippingFee, shippingFee + sum];
}

console.log(checkout([7000, 7000, 4000], 15000, 2500));
