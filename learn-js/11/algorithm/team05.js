function tollgate(obj) {
  let total = 0;
  for (idx in obj) {
    switch (obj[idx]) {
      case "tollgateA":
        total += 2000;
        break;
      case "tollgateB":
        total += 2300;
        break;
      case "tollgateC":
        total += 3000;
        break;
      case "tollgateD":
        total += 700;
        break;
      case "tollgateE":
        total += 4000;
        break;
      default:
        console.log("잘못된 정보를 입력하셨습니다.");
        break;
    }
  }

  return console.log(total);
}


function stairGame(n) {
  function dfs(c, y, memo) {
    const key = `${c},${y}`;
    if (memo.has(key)) return memo.get(key);

    let ways = 0;
    for (const [dc, dy] of [[2,0], [1,1], [0,2]]) { // 철수 승, 무, 패
      const nc = c + dc, ny = y + dy;

      if (nc >= n && ny >= n) continue; // 동시 도착 → 불인정
      if (nc >= n) { ways += 1; continue; } // 철수 단독 승리
      if (ny >= n) continue; // 영희 승리 → 0

      ways += dfs(nc, ny, memo);
    }
    memo.set(key, ways);
    return ways;
  }

  return dfs(0, 1, new Map()); // 철수 0, 영희 1에서 시작
}

// 사용 예시
const answer = stairGame(5);
console.log(answer); // 23