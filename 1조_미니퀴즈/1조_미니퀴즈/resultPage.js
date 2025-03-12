const score = localStorage.getItem('score') || 0; // 기본값 0 설정
const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || Array(10).fill('none');
const title = document.getElementById('title');
const scoreContent = document.getElementById('score');
const resultContainer = document.getElementById('resultContainer');

title.innerHTML = '퀴즈 결과';
scoreContent.innerHTML = `총점: <span style="color: green; font-weight: bold;">${score}/10</span>`;

// 문제 목록
const problemTitle = [
  '다음 중 아이디 선택자를 사용한 것은?',
  '내용이 요소의 크기를 벗어날 때 자동으로 스크롤이 되는 속성의 값은?',
  'flex에서 justify-content : space-between을 적용할 경우 발생하는 일은?',
  'div 요소의 높이는 몇 필셀인가?',
  '다음 코드의 실행 결과로 옳은 것은?',
  '다음 중 제목과 본문 글자 태그가 아닌 것은?',
  '다음 중 &lt;h1&gt;제목 글자 태그 1&lt;/h1&gt; 부터 &lt;h6&gt;제목 글자 태그 6&lt;/h6&gt;까지 생성하는 Emmet 단축 코드는?(VScode기준)',
  'HTML 목록을 만들 때 내용이 틀린 태그는?',
  '다음 중 &lt;audio&gt; 태그와 &lt;video&gt; 태그 내부에 넣어, 웹 브라우저가 재생할 수 있는 파일 확장자 관련 문제를 해결할 때 사용하는 태그는?',
  '다음 중 HTTP 상태 코드가 올바른 것은?',
];

const problemWord = [
  ['*', '#header', '.header', 'h1'],
  ['overflow : hidden;', 'overflow : auto;', 'overflow : visible;', 'overflow : scroll;'],
  ['모든 요소가 가운데 정렬된다.', '요소들 사이에 동일한 간격이 생기지만, 양 끝에는 여백이 없다.', '모든 요소가 앞에서부터 정렬된다.', '모든 요소가 끝쪽으로 정렬된다.'],
  ['100px', '140px', '160px', '120px'],
  ['20', 'NaN', 'undefined', 'TypeError'],
  ['h : 제목을 나타내는 태그', 'p : 단락을 나타내는 태그', 'br : 미리 서식이 지정된 텍스트를 의미', 'hr : 수평 줄을 그리는 태그'],
  ['h${제목$}*6', 'h&{제목&}*6', 'h#{제목#}*6', 'h%{제목%}*6'],
  ['ul : 순서가 없는 목록 생성', 'ol : 순서가 있는 목록 생성', 'li : 목록 요소 생성', 'dl : 제목 표시'],
  ['src', 'source', 'content', 'media'],
  ['1xx(성공)', '2xx(리다이렉션)', '3xx(클라이언트 오류)', '5xx(서버 오류)'],
];

const problemAnswer = [
  "정답: #<br>아이디 선택자를 사용할 때는 '#' 기호를 사용합니다.",
  "정답: overflow:scroll;<br>영역을 벗어나는 부분을 scroll로 만드는 속성 키워드는 scroll 입니다.",
  "정답: 요소들 사이에 동일한 간격이 생기지만, 양 끝에는 여백이 없다.<br>justify-content: space-between;은 첫 번째 요소는 왼쪽 끝, 마지막 요소는 오른쪽 끝에 배치되고 나머지 요소들 사이에 동일한 간격 발생",
  "정답: 100px<br>box-sizing: border-box;을 설정하면 padding과 border가 포함된 크기로 적용되므로 height: 100px; 그대로 유지",
  "정답: NaN<br>sum(20)에서 b 값이 undefined가 되고, 20+undefined는 NaN이 됨.",
  "정답: br<br>br 태그는 단순히 한 줄만 내려가는 줄 바꿈 태그입니다.",
  "정답: h${제목$}*6<br>h$ -> h1~h6 태그 자동 생성 , {제목$} ->$가 자동 증가하여 제목1~제목6 생성, *6 ->6번 반복",
  "정답: dl<br>dl은 제목을 표시하는 태그가 아니라 설명 목록을 만드는 태그이므로, 4번이 틀린 설명입니다!",
  "정답: source<br> &lt;audio&gt; 및 &lt;video&gt; 태그는 브라우저마다 지원하는 파일 형식이 다를 수 있습니다. 이를 해결하기 위해 <source> 태그를 사용하여 여러 개의 미디어 파일을 지정할 수 있습니다.",
  "정답: 5xx(서버 오류)<br>1xx(정보) 2xx(성공) 3xx(리다이렉션) 4xx(클라이언트 오류)"
];

const problemCorrect = ['4', '3', '4', '1', '2', '3', '1', '4', '2', '4']; // 정답 인덱스 (1부터 시작)

// 모든 문제 출력
for (let i = 0; i < problemTitle.length; i++) {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question-box');

  const userAnswerIndex = parseInt(userAnswers[i]); 
  const correctAnswerIndex = parseInt(problemCorrect[i]); 
  const isCorrect = userAnswerIndex === correctAnswerIndex;

  const userAnswer = userAnswers[i] === 'none' ? '응답 없음' : problemWord[i][userAnswerIndex - 1];

  questionDiv.innerHTML = `
    <h3>문제 ${i + 1}: ${problemTitle[i]}</h3>
    <p><strong>내 답변:</strong> ${userAnswer}</p>
    <p style="color: ${isCorrect ? 'green' : 'red'};"><strong>${problemAnswer[i]}</strong></p>
  `;

  resultContainer.appendChild(questionDiv);
}

// 처음으로 돌아가기 버튼
function handleStart() {
  localStorage.clear(); // 모든 데이터 초기화
  window.location.href = 'main.html';
}