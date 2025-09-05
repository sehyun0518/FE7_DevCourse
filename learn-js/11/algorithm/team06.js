function play(events) {
  let patriot = 0;   // 애국 의지 (태극기 개수)
  let actions = 0;   // 독립운동 시도 횟수
  let control = 0;   // 통제 강도 (일장기 개수)

  for (const e of events) {
    switch (e) {
      case "태극기":
        patriot += 1;
        console.log(`태극기를 획득했습니다! (현재 ${patriot}개)`);
        if (patriot >= 5) {
          console.log("광복 성공! 축하합니다!");
          return;
        }
        break;

      case "독립운동 시도":
        actions += 1;
        console.log(`독립운동을 시도했습니다! (현재 ${actions}회)`);
        if (actions >= 2) {
          console.log("광복 성공! 축하합니다!");
          return;
        }
        break;

      case "일장기":
        control += 1;
        console.log(`일장기를 획득했습니다... (현재 ${control}개)`);
        if (control >= 3) {
          console.log("광복 실패... 다시 도전하세요.");
          return;
        }
        break;

      case "일본순사":
        console.log("일본 순사에게 꼰지름! 바로 광복 실패...");
        return;

      default:
        // 다른 문자열은 영향 없음 (출력도 없음)
        break;
    }
  }
}