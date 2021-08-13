
// 추가 점수
let extraScore = 1;

// 무적모드로 하려면 false로 수정
let wuDi = true;

// 첫 번째 과일: 0 ~ 10까지, 0은 포도, 9는 수박 반 개
let firstFruit = 0;

// 과일 합성 반전하려면 true로 수정
let reverseLevelUp = false;

// 생성된 과일 지정 : 반전 켜기 않기 0-5, 반전 켜기 6-11，숫자 수정으로 무작위로 생성된 과일 범위 제어
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {
  // 지정 전에 몇 번 생성된 과일은 임의의 수량을 채울 수 있음. 0은 포도, 9는 수박 반 개
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일 QTan 더하기: false를 1보다 작은 임의의 소수로 변경
let fruitQTan = false;

// 낙하 속도 변경: false를 0보다 큰 임의의 수로 변경 ( 추천: 5 )
let fruitSlowDown = false;

// 오른쪽 위 아이콘을 클릭하여 과일 바꾸기: false를 true로 변경
let clickChangeFruit = true;

// 광고 링크
let adLink = 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png';

// 웹 페이지 제목 수정
document.getElementsByTagName("title")[0].innerText = `Kled's Watermelon Game!`;

// 선택 팝업 열기: false를 true로 변경
let selectModal = false;

