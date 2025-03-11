// const score = localStorage.getItem('score');
// const title = document.getElementById('title');
// const scoreContent = document.getElementById('score');
// title.innerHTML = '게임이 종료되었습니다!';
// scoreContent.innerHTML = '최종 스코어:' + score + '/10';

// function handleStart() {
//   window.location.href = 'main.html';
// }
const score = localStorage.getItem('score');
const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
const title = document.getElementById('title');
const scoreContent = document.getElementById('score');
const resultContainer = document.getElementById('resultContainer');

title.innerHTML = '퀴즈 결과';
scoreContent.innerHTML = `총점: <span style="color: green; font-weight: bold;">${score}/10</span>`;

// 문제 목록 
const problemTitle = [
  'HTML에서 목록을 만들 때 사용하는 태그가 아닌 것은?',
  'CSS에서 요소의 외부 여백을 설정하는 속성은?',
  'JavaScript에서 변수를 선언하는 키워드가 아닌 것은?',
  'HTML에서 이미지를 삽입하는 태그는?',
  'CSS에서 글자 크기를 조절하는 속성은?',
  'JavaScript에서 함수를 선언하는 키워드는?',
  'HTML에서 하이퍼링크를 생성하는 태그는?',
  'CSS에서 요소를 숨기는 속성은?',
  'JavaScript에서 배열의 길이를 구하는 속성은?',
  'HTML에서 문서의 제목을 설정하는 태그는?'
];

const problemWord = [
  ['ul', 'ol', 'dl', 'ml'], 
  ['padding', 'border', 'margin', 'outline'], 
  ['var', 'let', 'const', 'define'],
  ['img', 'image', 'pic', 'photo'],
  ['font-size', 'text-size', 'size', 'letter-size'],
  ['function', 'method', 'define', 'class'],
  ['a', 'link', 'href', 'url'],
  ['display', 'visibility', 'hide', 'opacity'],
  ['length', 'size', 'count', 'total'],
  ['title', 'head', 'header', 'meta']
];

const problemAnswer = [
  "정답: ml<br>ul 은 순서가 없는 목록, ol 은 순서가 있는 목록, dl 은 정의 목록을 만드는 태그입니다. ml 은 존재하지 않는 태그입니다.",
  "정답: margin<br>margin 은 요소의 외부 여백, padding 은 내부 여백, border 는 테두리를 설정합니다.",
  "정답: define<br>JavaScript에서 변수를 선언할 때 var, let, const 를 사용하며, define 이라는 키워드는 존재하지 않습니다.",
  "정답: img<br>HTML에서 이미지를 삽입할 때는 <img> 태그를 사용합니다.",
  "정답: font-size<br>CSS에서 글자의 크기를 조절할 때는 font-size 속성을 사용합니다.",
  "정답: function<br>JavaScript에서 함수를 선언할 때 function 키워드를 사용합니다.",
  "정답: a<br>HTML에서 링크를 생성할 때는 <a> 태그를 사용합니다.",
  "정답: display<br>CSS에서 요소를 숨길 때 display: none;을 사용할 수 있습니다.",
  "정답: length<br>JavaScript에서 배열의 길이를 구할 때는 length 속성을 사용합니다.",
  "정답: title<br>HTML에서 문서의 제목을 설정하는 태그는 <title> 태그입니다."
];

const problemCorrect = ['4', '3', '4', '1', '1', '1', '1', '2', '1', '1']; // 정답 인덱스 (1부터 시작)

// 모든 문제, 정답, 해설 출력
for (let i = 0; i < problemTitle.length; i++) {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question-box');

  const userAnswer = userAnswers[i] === 'none' ? '응답 없음' : problemWord[i][userAnswers[i] - 1];

  questionDiv.innerHTML = `
    <h3>문제 ${i + 1}: ${problemTitle[i]}</h3>
    <p><strong>내 답변:</strong> ${userAnswer}</p>
    <p style="color: ${userAnswers[i] == problemCorrect[i] ? 'green' : 'red'};"><strong>${problemAnswer[i]}</strong></p>
  `;

  resultContainer.appendChild(questionDiv);
}

function handleStart() {
  window.location.href = 'main.html';
}
