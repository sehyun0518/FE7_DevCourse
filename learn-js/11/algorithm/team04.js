function car(p, d) {
  const n = p.length;

  if (p[d] === 0) {
    console.log("주차 완료", d);
  }

  // 원하는 칸에서 좌우로 반경을 늘리며 가장 가까운 빈칸 탐색
  const maxR = Math.max(d, n - 1 - d);
  for (let r = 1; r <= maxR; r++) {
    const left  = d - r;
    const right = d + r;

    if (left >= 0 && p[left] === 0) {
      p[left] = 1;
      console.log("주차 완료", left);
      return left;
    }
    if (right < n && p[right] === 0) {
      p[right] = 1;
      console.log("주차 완료", right);
      return right;
    }
  }

  console.log("주차 불가");
}